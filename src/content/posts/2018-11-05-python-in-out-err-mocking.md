---
title:  "Mocking stdin, stderr and stdout for python unittest"
date:   2018-11-05 19:14:58
slug: "python-mock-stdin-stderr-stdout"
author: "sophie"
crosspost:
  url: https://sophieau.com/article/python-mock-stdin-stderr-stdout
  site: "Sophie's Blog"
  hasPrefix: false
---

Working on my latest project, [todoster](github.com/sophieau/todoster), forced me to learn all about input/output mocking using python's built-in `unittest` library.


## Mocking Output to stdout or stderr

The way I've been using the mock output or error stream is by getting its contents as a string. For this, there is a very simple method:

```python
mock_err.getValue()
mock_out.getValue()
```

With this string you can do assertions as normal. However, since `mock_err` and `mock_output` aren't actually strings but streams you need to be very careful when trying to use the same stream a second time. The streams don't get cleared automatically so you need to either re-declare the mocks or make sure they're manually cleared out before every re-use.

If you want to have one mock for one test case (class) just make sure you're resetting `mock_out` and `mock_err` after every test like so:

```python
import patch from unittest.mock

class TestClass
    mock_out = patch('sys.stdout', new_callable=StringIO)
    mock_err = patch('sys.stderr', new_callable=io.StringIO)

    def tearDown(self):
        self.mock_out.truncate(0)
        self.mock_out.seek(0)
        self.mock_err.truncate(0)
        self.mock_err.seek(0)

    # ...
```

On the other hand, you can mock on a test by test basis by using decorators like so:

```python
from unittest.mock import patch

class TestClass(unittest.TestCase):
    #...

    @patch('sys.stderr', new_callable=io.StringIO)
    @patch('sys.stdout', new_callable=io.StringIO)
    test_small_functionality(self, mock_out, mock_err)
        # test something
```
Now you don't have to worry about clearing out the mocks after every test but it does come with having to add a new decorator for every test method that needs the mock.



## Mocking stdin

If you want to mock stdin, this is the simplest solution I could find. It assumes that the code under test calls input only once though.

```python
@patch('builtins.input', side_effect=['the input you want to test'])
def test_delete_project_say_no(self, _):
    # test something
```

