import { UserInfo } from './types'

const UserInfos: UserInfo[] = [
  {
    baseInfo: {
      name: 'Sophie Au',
      city: 'Berlin, Germany',
      bio:
        "I'm a full-stack developer and web designer with a passion for user experience design and agile consulting. When I'm not coding or designing, I can be found exploring Berlin's hipster coffee shops.",
      bioShort:
        "I'm a full-stack developer and web designer with a passion for user experience design and agile consulting. When I'm not coding or designing, I'm exploring Berlin.",
    },
    image: 'sophie',
    socialMedia: [
      { platform: 'github', url: 'https://github.com/SophieAu' },
      { platform: 'website', url: 'https://sophieau.com' },
      { platform: 'dribbble', url: 'https://dribbble.com/solviau' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/sophie-au' },
      { platform: 'twitter', url: 'https://twitter.com/solviau' },
    ],
  },
  {
    baseInfo: {
      name: 'Jean Bauer',
      city: 'Porto Alegre, Brazil',
      bio:
        "I’m a twenty-three-years-old consultant developer focused on building web solutions for real-life problems, most of the time using JavaScript. I'm currently working for ThoughtWorks.",
      bioShort:
        "I’m a consultant developer focused on building web solutions for real-life problems, most of the time using JavaScript. I'm currently working for ThoughtWorks.",
    },
    image: 'jean',

    socialMedia: [
      { platform: 'github', url: 'https://github.com/jeanbauer' },
      { platform: 'twitter', url: 'https://twitter.com/jeanbauerr' },
      { platform: 'medium', url: 'https://medium.com/@jeanbauer/' },
    ],
  },
  {
    baseInfo: {
      name: 'Elloise Przybylo',
      city: 'Brisbane, Australia',
      bio:
        'I am a business analyst living in Brisbane, Australia. I have a Bachelor of Information Technology from the University of Queensland with a focus on web and user experience design.',
      bioShort:
        "I'm a business analyst living in Brisbane. I have a Bachelor of Information Technology from the University of Queensland focussing on web and user experience design.",
    },
    image: 'ellie',

    socialMedia: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/elloise-przybylo-2ab00b143/' },
    ],
  },
  {
    baseInfo: {
      name: 'Jackie Robinson',
      city: 'Dallas, TX, USA',
      bio:
        "Hi, I'm Jackie, a software developer from Slidell, Louisiana. Fun Facts: I'm an identical twin. Fun Fact 2: I'm not named after the baseball player. I love Android. I have serious obsession with music. Did I mention I love Android?",
      bioShort:
        "I'm a software developer from Slidell, Louisiana. Fun Facts: I'm an identical twin. I love Android. I have serious obsession with music. Did I mention I love Android?",
    },
    image: 'jackie',

    socialMedia: [
      { platform: 'facebook', url: 'https://www.facebook.com/jackie.robinson.7' },
      { platform: 'instagram', url: 'https://www.instagram.com/jakalak/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/jackierobinsonm/' },
      { platform: 'github', url: 'https://github.com/jackierobinson' },
    ],
  },
  {
    baseInfo: {
      name: 'Kamalashree Nagaraj',
      city: 'Bangalore, India',
      bio:
        "I'm a full-stack developer with a passion for back-end development, data analytics and agile consulting. When I'm not coding, you can find me, the gardener, the gamer or the artist!",
      bioShort:
        "I'm a full-stack developer with a passion for back-end development, data analytics and agile consulting. When not coding, you can find me, the gardener, the gamer, the artist!",
    },
    image: 'kamala',
    socialMedia: [
      { platform: 'github', url: 'https://github.com/KamalashreeNagaraj' },
      { platform: 'facebook', url: 'https://www.facebook.com/kamalashreen' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/kamalashree-nagaraj-2a69b9ab/' },
      { platform: 'instagram', url: 'https://www.instagram.com/kamalashree_n/' },
      { platform: 'twitter', url: 'https://twitter.com/Kamalashree5' },
    ],
  },
  {
    baseInfo: {
      name: 'Andrei Cartan',
      city: 'Manchester, United Kingdom',
      bio:
        "I'm a tennis fan with a big passion for trains, lately discovered DevOps which I am very interested in mastering. AWS and Terraform fan and doing AR in iOS as a hobby. Pushing to launch my first mobile app and speak at a conference.",
      bioShort:
        'Tennis fan with a big passion for trains and DevOps (Terraform and AWS). Doing AR in iOS as a hobby. Pushing to launch my first mobile app and speak at a conference.',
    },
    image: 'andrei',
    socialMedia: [
      { platform: 'instagram', url: 'https://www.instagram.com/justakid94' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/andreialexandrucartan' },
      { platform: 'twitter', url: 'https://twitter.com/justakid94' },
      { platform: 'website', url: 'https://andreicartan.com' },
    ],
  },
  {
    baseInfo: {
      name: 'Nimish Singh',
      city: 'Gurgaon, India',
      bio:
        'I enjoy looking through different technologies and tools (not limited to any one domain as of now). I am a sincere guy who thrives in a team environment. I also enjoy making pencil sketches and reading books.',
      bioShort:
        'I enjoy looking through different technologies and tools. I am a sincere guy who thrives in a team environment. I also enjoy making pencil sketches and reading books.',
    },
    image: 'nimish',
    socialMedia: [
      { platform: 'github', url: 'https://www.github.com/Nimish-Singh' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/nimish-singh' },
    ],
  },
]

export default UserInfos
