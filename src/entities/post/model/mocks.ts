import { type Post } from './types'

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    slug: 'kuniom-aekawa',
    title: 'KUNIOM AEKAWA',
    subtitle: 'A new exhibition at Kinfolk’s Case Study Room in Tokyo.',
    category: 'CULTURE',
    date: '2026-03-10',
    cover: '/content/posts/kuniom-aekawa/cover.webp',
    blocks: [
      {
        id: 'b1',
        type: 'header',
        data: {
          title: 'KUNIOM AEKAWA',
          category: 'ARTS & CULTURE, DESIGN',
          subtitle: 'A new exhibition at Kinfolk’s Case Study Room in Tokyo.',
          url: '/content/posts/kuniom-aekawa/header.webp',
        },
      },
      {
        id: 'b2',
        type: 'editorial',
        data: {
          left: {
            id: 'lb1',
            type: 'image',
            data: {
              url: '/content/posts/kuniom-aekawa/editorial-01.webp',
              variant: 'default',
              caption:
                'Nilsson wears a coat by WE11DONE, shoes by MAISON MARTIN MARGIELA, rings by J. HANNAH, an ear cuff by FARIS, vintage socks, her own earrings and the stylist’s own necklace.',
            },
          },
          right: {
            id: 'rb1',
            type: 'image',
            data: {
              url: '/content/posts/kuniom-aekawa/editorial-02.webp',
              variant: 'small',
              caption: 'She wears a dress by MELITTA BAUMEISTER and earrings by PANCONESI.',
            },
          },
          center: [
            {
              id: 'b3',
              type: 'text',
              data: {
                type: 'paragraph',
                content:
                  'When Ebba Tove Elsa Nilsson was 15 years old, she won a prize for a short story she wrote. In it, two best friends have grown apart because one of them gets a boyfriend; in response, the other friend starts stalking her, and ends up killing her “just to keep her close.” Nilsson — known professionally as pleasure-seeking pop star Tove Lo — is laughing as she recounts this tale. “It was pretty dark,” she concedes, “but there was humor to it. And Sweden being Sweden, they were like, ‘Yay!’ Most of the stories I wrote were about a girl doing twisted things.”',
              },
            },
            {
              id: 'b4',
              type: 'text',
              data: {
                type: 'paragraph',
                content:
                  'Since Nilsson broke through 10 years ago with the sleeper hit “Habits (Stay High),” songs with undercurrents of deviance and discomfort — about girls doing “twisted” things — have become something of a mainstay in her oeuvre. There’s a reason, after all, that the 35-year-old singer-songwriter has carried the label of the “saddest girl in Sweden” for so long; her music has largely explored the murkiness of hedonism — the joys and exuberance, the escape and the sensuality, but also its more concerning and painful underbelly.',
              },
            },
            {
              id: 'b5',
              type: 'text',
              data: {
                type: 'paragraph',
                content:
                  'Before “Habits” gained internet virality and propelled her to stardom in her own right, Nilsson’s music career started with writing songs for other artists, something she still does to this day (she has writing credits for Dua Lipa, Charlie XCX, Lorde and more). But there is a distinct personality that comes through in the songs that she writes for herself: propulsive, breathy, druggy, wry, a little depraved. These are lyrics predominantly rooted in some form of reality for the artist; not so much a considered, manufactured party-girl persona, she explains, but an insight into some of her real thoughts and experiences, albeit ones that are sometimes exaggerated and wrought larger than life.',
              },
            },
            {
              id: 'b6',
              type: 'text',
              data: {
                type: 'paragraph',
                content:
                  'I just wanted to show where I was at in life.” In the short films that she made to accompany the records, she pushed into the “left” again, establishing her artistic realm as a lusty, seedy world of late nights, parties, friendships and lovers. “I can barely look at those [short films] now,” she reflects. “I’m so proud of them — I think they’re so beautiful — but it’s hard for me to watch and know how dark of a time that was for me.”',
              },
            },
            {
              id: 'b7',
              type: 'text',
              data: {
                type: 'heading',
                content:
                  '“If I’m in a dark place now, I don’t usepartying to cope. I try to stay in thefeelings and work it out.”',
              },
            },
            {
              id: 'b8',
              type: 'text',
              data: {
                type: 'paragraph',
                content:
                  'Nilsson, her friends and her husband all still party, and she doesn’t see that changing anytime soon, but now, she explains, it feels more intentional and respectful — both when it comes to others and herself. “If I’m in a dark place now, I don’t use partying to cope,” she says. “I try to stay in the feelings and work it out. And so now partying and doing wild things are things I do when I’m feeling good and I want to enhance the feeling and have a good time.” She stands by the necessity of going out to shake it off when things are a bit shitty but is now more conscious of her boundaries. “If you’re constantly running from it and constantly trying to numb your feelings . . .,” she pauses, “I don’t do that anymore. That’s where I feel like it got destructive.” Even looking back at “Habits” — a song that was broadly about partying excessively to try to forget about someone — is no longer a testament to pain. “That song changed my life,” she explains, “so it’s not sad for me anymore. Now it’s nostalgic and euphoric.”',
              },
            },
          ],
        },
      },
      {
        id: 'b9',
        type: 'image',
        data: {
          url: '/content/posts/kuniom-aekawa/banner.webp',
          variant: 'default',
          caption:
            'Nilsson wears a jacket and skirt by WE11DONE, earrings by SOPHIE BUHAI and rings by J. HANNAH.',
        },
      },
      {
        id: 'b10',
        type: 'editorial',
        data: {
          left: {
            id: 'b11',
            type: 'image',
            data: {
              url: '/content/posts/kuniom-aekawa/editorial-03.webp',
              variant: 'default',
              caption:
                'Nilsson wears a suit and boots by IRO, rings by J. HANNAH, ear cuff by FARIS, a vintage top, her own earrings and the stylist’s own necklace.',
            },
          },
          right: {
            id: 'b12',
            type: 'image',
            data: {
              url: '/content/posts/kuniom-aekawa/editorial-04.webp',
              variant: 'small',
              caption: 'She wears a dress by MELITTA BAUMEISTER and earrings by PANCONESI.',
            },
          },
          center: [
            {
              id: 'b13',
              type: 'text',
              data: {
                type: 'heading',
                content:
                  '“I was vulnerable through andthrough, but that doesn’t alwaysmean sadness.”',
              },
            },
            {
              id: 'b14',
              type: 'text',
              data: {
                type: 'paragraph',
                content: `Perhaps that interplay between battling with her brain and finding contentment is why the candor in her lyrics — be it those more difficult tracks about her insecurities and pain, or the frank and delicious lines about her nipples being hard or giddily guiding her partner to give her oral sex — all feels very raw and real. It’s something that she attributes to her upbringing in the Skåne region of southern Sweden. “It’s funny, because I feel this contradiction in my childhood,” she says. Her mother is a therapist and her father cofounded a successful fintech company, and she recalls that the area they lived in, which was quite affluent, could feel judgmental — like no one was showing their flaws. “Everyone kept their face on all the time.” At home, however, her family talked about everything: “We would express how we felt a lot. Me and my dad would fight when I was a teenager, but he was always good at apologizing. He has a lot of authority, but he’s a very emotional guy, sensitive and loving.”
                She also recognizes how the same openness was manifest in her mother, not least the way she spoke about human behavior. “Hearing her talk about our patterns — how similar we are but with these little differences, and how we communicate can cause so much pain and suffering, but also joy — ” she muses, “I’m always very fascinated by humans, and how love can completely change a human being. How something that is completely irrational to you when you’re not in love becomes so rational when you are, because love does something to you.”`,
              },
            },
            {
              id: 'b15',
              type: 'text',
              data: {
                type: 'paragraph',
                content: `In her most recent releases, Nilsson grapples with the spirals of emotion caused by exposing yourself to the vulnerabilities of love. It’s palpable in the catastrophizing that runs through the tracks on Dirt Femme, and on the 2023 single “Borderline,” where the point of view is from someone inventing all kinds of internal drama with a partner out of insecurity. “With jealousy and insecurity, the only person you’re hurting is you,” she says. “But for me, it helps to get it out of my head — to say it to a friend, or to my husband, or to put it in a song.” She recounts how a friend had interpreted the nightmarish jealousy scenario Nilsson invented for the song “Mistaken” (from her 2019 album Sunshine Kitty) to be true. “I played it at a show, and the friend turned to [my husband] and was like, What did you do to her?! It’s just me feeling vulnerable and insecure in my head and writing a song about it, but it sounds like it’s his fault,” she giggles. “It’s the power of the mind!”`,
              },
            },
            {
              id: 'b16',
              type: 'text',
              data: {
                type: 'heading',
                content:
                  '“Maybe the way I express myself, forsome people, is like, Oh, why would youadmit to that feeling?“',
              },
            },
            {
              id: 'b17',
              type: 'text',
              data: {
                type: 'paragraph',
                content: `Still, despite being a tool for catharsis, writing is not always something that comes easily. “I’ve always preferred listening to music that described the feeling, not how I should be feeling — aspirational songs telling me what I should aim for,” she says. “I just wanted to sit in my feelings and relate to someone, so maybe that’s why I write in that way.” And yet, despite having been doing it for the best part of two decades, there are still times when Nilsson doubts her ability: “It’s going from that place of, This is shit, I am shit, why does everyone think I can do this? to This is great, this is amazing, I can’t believe I get to do this!” As with all things, the way she gets herself through is by reminding herself that “this will pass.”`,
              },
            },
            {
              id: 'b18',
              type: 'text',
              data: {
                type: 'paragraph',
                content:
                  'Nilsson does not know what the future holds, but she knows she always wants to be writing songs she relates to. In doing so, and in baring parts of herself so readily, she works to eradicate ingrained feelings of shame, exercising the power of her mind, all while imploring listeners to feel pleasure and tap into their own dark and twisted fantasies, reclaiming desire and autonomy in a way that is fulfilling rather than destructive. Or, as she puts it, far more succinctly: “You can be deep and still be a slut.”',
              },
            },
          ],
        },
      },
      {
        id: 'b19',
        type: 'line',
        data: null,
      },
    ],
  },
  {
    id: '2',
    slug: 'tove-lo',
    title: 'Tove Lo',
    subtitle: 'The pop star reflects on the big feelings behind her biggest hits.',
    category: 'MUSIC, ISSUE 49',
    date: '2026-03-10',
    cover: '/content/posts/tove-lo/cover.webp',
    blocks: [],
  },
  {
    id: '3',
    slug: 'urban-doom',
    title: 'Urban Doom',
    subtitle: 'A saturnine mélange of subversive styles.',
    category: 'FASHION, ISSUE 49',
    date: '2026-03-10',
    cover: '/content/posts/urban-doom/cover.webp',
    blocks: [],
  },
  {
    id: '4',
    slug: 'amalie-smith',
    title: 'Amalie Smith',
    subtitle: 'The Danish arts writer finding clarity between the lines.',
    category: 'ARTS & CULTURE',
    date: '2026-03-10',
    cover: '/content/posts/amalie-smith/cover.webp',
    blocks: [],
  },
  {
    id: '5',
    slug: 'karin-mamma-andersson',
    title: 'Karin Mamma Andersson',
    subtitle: 'Inside the moody, mysterious world of Sweden’s preeminent painter.',
    category: 'ARTS & CULTURE',
    date: '2026-03-10',
    cover: '/content/posts/karin-mamma-andersson/cover.webp',
    blocks: [],
  },
  {
    id: '6',
    slug: 'mamoudou-athie',
    title: 'Mamoudou Athie',
    subtitle: 'The shape-shifting actor is on a roll.',
    category: 'FILMS, ISSUE 49',
    date: '2026-03-10',
    cover: '/content/posts/mamoudou-athie/cover.webp',
    blocks: [],
  },
  {
    id: '7',
    slug: 'gracie-abrams',
    title: 'Gracie Abrams',
    subtitle: 'The songwriter turning quiet confessions into global anthems.',
    category: 'CULTURE',
    date: '2026-04-02',
    cover: '/content/posts/gracie-abrams/cover.webp',
    blocks: [],
  },
  {
    id: '8',
    slug: 'neon-revival',
    title: 'Neon Revival',
    subtitle: 'A bold collision of retro futurism and underground edge.',
    category: 'CULTURE',
    date: '2026-04-02',
    cover: '/content/posts/neon-revival/cover.webp',
    blocks: [],
  },
  {
    id: '9',
    slug: 'luca-holm',
    title: 'Luca Holm',
    subtitle: 'Exploring identity and memory through experimental prose.',
    category: 'CULTURE',
    date: '2026-04-02',
    cover: '/content/posts/luca-holm/cover.webp',
    blocks: [],
  },
  {
    id: '10',
    slug: 'elin-nyström',
    title: 'Elin Nyström',
    subtitle: 'The painter blending Nordic landscapes with surreal narratives.',
    category: 'CULTURE',
    date: '2026-04-02',
    cover: '/content/posts/elin-nystrom/cover.webp',
    blocks: [],
  },
  {
    id: '11',
    slug: 'jacob-elordi',
    title: 'Jacob Elordi',
    subtitle: 'From teen idol to complex leading man.',
    category: 'CULTURE',
    date: '2026-04-02',
    cover: '/content/posts/jacob-elordi/cover.webp',
    blocks: [],
  },
  {
    id: '12',
    slug: 'maya-hawke',
    title: 'Maya Hawke',
    subtitle: 'Balancing indie film roles with a rising music career.',
    category: 'CULTURE',
    date: '2026-04-02',
    cover: '/content/posts/maya-hawke/cover.webp',
    blocks: [],
  },
]
