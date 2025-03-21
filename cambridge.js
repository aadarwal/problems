// This is a Next.js project structure that you can deploy to Vercel

// File: package.json
{
    "name": "cambridge-explorer",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "@heroicons/react": "^2.0.18",
      "@tailwindcss/typography": "^0.5.9",
      "autoprefixer": "^10.4.14",
      "clsx": "^1.2.1",
      "next": "^13.4.7",
      "postcss": "^8.4.24",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "tailwindcss": "^3.3.2"
    }
  }
  
  // File: tailwind.config.js
  module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f5f7ff',
            100: '#ebf0fe',
            200: '#d6e0fd',
            300: '#b3c7fb',
            400: '#85a5f9',
            500: '#527cf6',
            600: '#2d57f3',
            700: '#1a44e4',
            800: '#1537c0',
            900: '#11299b',
          },
          dark: {
            800: '#1e2023',
            900: '#121416',
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  
  // File: postcss.config.js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  
  // File: data/cambridgeData.js
  export const cambridgeData = {
    categories: [
      {
        id: "philosophy",
        title: "Philosophy Sites",
        emoji: "🧠",
        color: "bg-purple-700"
      },
      {
        id: "physics",
        title: "Physics Sites",
        emoji: "⚛️",
        color: "bg-blue-700"
      },
      {
        id: "bookshops",
        title: "Bookshops",
        emoji: "📚",
        color: "bg-amber-700"
      },
      {
        id: "activities",
        title: "Activities",
        emoji: "🚶",
        color: "bg-green-700"
      },
      {
        id: "other",
        title: "Other Notable Sites",
        emoji: "🏛️",
        color: "bg-rose-700"
      }
    ],
    locations: [
      {
        id: "wittgenstein-room",
        name: "Wittgenstein's Room",
        category: "philosophy",
        location: "Trinity College",
        emoji: "🏛️",
        description: "Where Wittgenstein wrote \"Philosophical Investigations\"",
        access: "Check with porter's lodge; entrance fee",
        details: {
          significance: "Wittgenstein developed his later philosophy here, including parts of \"Philosophical Investigations.\"",
          notes: [
            "Wittgenstein came to Cambridge in 1911 to study with Russell",
            "After \"Tractatus Logico-Philosophicus,\" he abandoned philosophy, returning to Cambridge in 1929",
            "His spartan room (he reportedly sat on a deck chair rather than regular furniture) reflects his rejection of his wealthy family background",
            "The room is maintained close to its original condition",
            "Students would gather here for intense conversations lasting hours, often continuing as walks around the college",
            "His unorthodox lecturing style typically began with \"Take a case...\" exploring philosophical problems through everyday scenarios",
            "During his time at Trinity, he developed his concept of \"language games\" that revolutionized philosophy of language"
          ]
        }
      },
      {
        id: "russell-rooms",
        name: "Bertrand Russell's Rooms",
        category: "philosophy",
        location: "Trinity College",
        emoji: "🏛️",
        description: "External viewing of where Russell worked on \"Principia Mathematica\"",
        access: "Viewable from courtyard",
        details: {
          significance: "Russell collaborated with Alfred North Whitehead on \"Principia Mathematica\" while at Trinity.",
          notes: [
            "Located in Whewell's Court (pronounced \"Hugh-ell\"), a Neo-Gothic section of Trinity College",
            "Russell experienced his \"intellectual conversion\" around 1900 after hearing about an Italian mathematician's work",
            "The rooms witnessed the birth of analytic philosophy",
            "Russell was elected a fellow of Trinity in 1895 and remained connected throughout his life",
            "The collaboration with Whitehead on \"Principia Mathematica\" (1910-1913) was one of the most ambitious projects in the history of logic",
            "Russell was dismissed from Trinity in 1916 due to his pacifist activities during WWI, but was later invited back",
            "His office was known for being cluttered with papers, in stark contrast to Wittgenstein's minimalism",
            "Here Russell wrote much of \"The Problems of Philosophy\" (1912), still considered an excellent introduction to philosophy"
          ]
        }
      },
      {
        id: "wittgenstein-grave",
        name: "Wittgenstein's Grave",
        category: "philosophy",
        location: "Ascension Burial Ground",
        emoji: "⚰️",
        description: "Final resting place of the influential philosopher",
        access: "Public access; outside city center",
        details: {
          significance: "The burial ground is known as 'the philosophers' cemetery' due to the number of Cambridge academics buried there.",
          notes: [
            "The grave is marked by a simple stone cross, reflecting his preference for austerity",
            "Often visited by philosophy students who leave small tokens or notes",
            "Wittgenstein died in 1951 and requested a \"plain funeral\" without ceremony",
            "Other notable philosophers buried nearby: G.E. Moore (who influenced Wittgenstein) and Elizabeth Anscombe (Wittgenstein's student and translator)",
            "Also buried here: John Maynard Keynes (economist) and Arthur Eddington (physicist who confirmed Einstein's theory of relativity)",
            "Finding the grave can be challenging as it's not prominently marked – it's in the newer section of the cemetery",
            "The grave inscription reads simply \"Ludwig Wittgenstein 1889-1951\""
          ]
        }
      },
      {
        id: "fitzwilliam-museum",
        name: "Fitzwilliam Museum",
        category: "philosophy",
        location: "Trumpington Street",
        emoji: "🏛️",
        description: "Houses important philosophical manuscripts",
        access: "Free entry; closed Mondays",
        details: {
          hours: "Tuesday–Saturday: 10am–5pm, Sunday: 12pm–5pm. Closed Mondays.",
          notes: [
            "Founded in 1816 when Viscount Fitzwilliam bequeathed his art collection and library to the University",
            "The manuscript collection includes works by René Descartes, John Locke, and David Hume",
            "Some manuscripts contain marginal notes providing insight into the thinking processes of these philosophers",
            "The collection includes original letters between philosophers that reveal the development of ideas",
            "The museum houses illuminated manuscripts, which include medieval philosophical texts with elaborate illustrations",
            "The museum regularly rotates which manuscripts are on display",
            "The Founders Library contains rare first editions of major philosophical works",
            "Researchers can request access to manuscripts not on public display by prior appointment",
            "The Department of Manuscripts and Printed Books can provide specialist guidance on philosophical texts"
          ]
        }
      },
      {
        id: "wren-library",
        name: "Wren Library",
        category: "philosophy",
        location: "Trinity College",
        emoji: "📚",
        description: "Contains important philosophical texts and manuscripts",
        access: "Limited hours; check website",
        details: {
          significance: "Houses Newton's personal copy of Principia Mathematica with his handwritten annotations.",
          notes: [
            "Designed by Sir Christopher Wren and completed in 1695",
            "Contains Ludwig Wittgenstein's early drafts of philosophical works",
            "First editions include Francis Bacon's \"Novum Organum\" (1620), which established the inductive scientific method",
            "Trinity College's philosophical collection started with the King's Library, donated by King George I in 1715",
            "Holds personal papers of G.E. Moore and other Cambridge philosophers",
            "Many books contain marginalia from famous readers – look for annotations by past scholars",
            "The library's architecture embodies Enlightenment principles of order, light, and rationality",
            "Some philosophical works are bound in human skin (anthropodermic bibliopegy), a controversial historical practice",
            "The library holds over 1,250 medieval manuscripts and 72,000 books printed before 1820"
          ]
        }
      },
      {
        id: "christs-college",
        name: "Christ's College",
        category: "philosophy",
        location: "St Andrew's Street",
        emoji: "🏛️",
        description: "Home to the Cambridge Platonists",
        access: "Small entrance fee",
        details: {
          significance: "Home to the Cambridge Platonists who revived Platonist doctrines to counter materialist philosophies.",
          notes: [
            "Founded in 1505 and was originally called God's House",
            "The Cambridge Platonists were 17th-century philosophers including Henry More, Ralph Cudworth, and Benjamin Whichcote",
            "They sought to reconcile reason with faith during a period of increasing scientific rationalism",
            "The movement emerged partly in response to the materialist philosophy of Thomas Hobbes",
            "The college's Old Library contains many original works by the Cambridge Platonists",
            "Charles Darwin was a student here, creating an interesting juxtaposition with the college's earlier Platonist tradition",
            "The Cambridge Platonists influenced later Idealist philosophy",
            "Several locations within the college, including the chapel and Fellows' Garden, were sites of philosophical discussions",
            "The college has a statue of Lady Philosophy in the Old Library"
          ]
        }
      },
      {
        id: "faculty-of-philosophy",
        name: "Faculty of Philosophy",
        category: "philosophy",
        location: "Sidgwick Avenue",
        emoji: "🏫",
        description: "Academic department with Casimir Lewy Library",
        access: "Limited public access",
        details: {
          significance: "The department was the birthplace of analytic philosophy.",
          notes: [
            "The Faculty is located in the Raised Faculty Building on the Sidgwick Site",
            "The Casimir Lewy Library contains over 17,000 volumes specializing in analytical philosophy",
            "Named after Casimir Lewy (1919-1991), a Polish-born philosopher who taught at Cambridge for over 40 years",
            "The famous \"Moral Sciences Club\" where groundbreaking philosophical ideas were debated still meets regularly",
            "The library holds the personal book collections of several famous Cambridge philosophers",
            "Wittgenstein's famous poker incident with Karl Popper occurred in a room still used for seminars (H3)",
            "The \"Cambridge School\" of philosophy is characterized by its emphasis on logic, language, and conceptual analysis",
            "The department's corridors display photographs of famous philosophers who taught there",
            "The reading room contains desks where many influential philosophical papers were written"
          ]
        }
      },
      {
        id: "cavendish-laboratory",
        name: "Cavendish Laboratory Museum",
        category: "physics",
        location: "JJ Thomson Avenue",
        emoji: "🔬",
        description: "Birthplace of numerous physics breakthroughs",
        access: "Check website for hours",
        details: {
          significance: "Site of the discovery of the electron, the neutron, and the structure of DNA.",
          notes: [
            "Established in 1874 and named after Henry Cavendish",
            "The museum is now located in the new Cavendish Laboratory at West Cambridge",
            "The laboratory has produced 29 Nobel Prize winners",
            "J.J. Thomson discovered the electron here in 1897 using the apparatus still on display",
            "James Chadwick discovered the neutron at the Cavendish in 1932",
            "Houses the apparatus used by Crick and Watson to determine the structure of DNA",
            "Displays Charles Wilson's cloud chamber that made subatomic particles visible for the first time",
            "Preserves the famous \"crocodile\" wooden sign that hung above Rutherford's door",
            "Maxwell's original color wheel demonstrating color theory is on display",
            "Lawrence Bragg developed X-ray crystallography here, becoming the youngest-ever Nobel laureate",
            "Visitor can see Pye radio equipment used to develop radar during World War II",
            "The laboratory's \"string and sealing wax\" experimental approach became famous for producing remarkable results with simple materials"
          ]
        }
      },
      {
        id: "whipple-museum",
        name: "Whipple Museum",
        category: "physics",
        location: "Free School Lane",
        emoji: "🔭",
        description: "Collection of scientific instruments and models",
        access: "Free entry; Mon-Fri 12pm-4:30pm",
        details: {
          significance: "Collection spans over 2,000 instruments from the Middle Ages to the present.",
          notes: [
            "Founded in 1944 when Robert Stewart Whipple donated his collection of scientific instruments to the University",
            "Housed in the former Perse School building on Free School Lane, adjacent to the old Cavendish Laboratory",
            "Contains a 1588 armillary sphere representing the Ptolemaic model of the universe",
            "Houses an extensive collection of sundials, including rare examples from the 16th century",
            "Visitors can see one of Newton's reflecting telescopes, which revolutionized astronomy",
            "Contains early electrical apparatus used to demonstrate principles of electromagnetism",
            "Includes a set of geometric models made by prisoners of war during the Napoleonic Wars",
            "Several working models of perpetual motion machines that visitors can interact with",
            "Displays a collection of early microscopes, including ones used by Darwin's contemporaries",
            "Collection of calculating devices showing the evolution of computation before electronic computers",
            "Houses James Clerk Maxwell's color wheel, demonstrating his theories on color perception",
            "The Globes Gallery displays rare celestial and terrestrial globes dating back to the 17th century"
          ]
        }
      },
      {
        id: "newton-apple-tree",
        name: "Newton's Apple Tree",
        category: "physics",
        location: "Trinity College",
        emoji: "🌳",
        description: "Descendant of the tree that inspired gravity theory",
        access: "College entrance fee",
        details: {
          significance: "Connected to Newton's development of universal gravitation theory.",
          notes: [
            "Not the original apple tree from Woolsthorpe Manor (Newton's home), but a grafted descendant",
            "Planted in the 1950s to commemorate Newton's connection to Trinity College",
            "A 'Flower of Kent' variety, which produces cooking apples with a tart flavor",
            "While the \"apple falling on Newton's head\" story is likely apocryphal, Newton did confirm that watching an apple fall helped inspire his thinking about gravity",
            "Located near the Wren Library where many of Newton's papers are kept",
            "Marked with a small plaque explaining its significance",
            "The original tree at Woolsthorpe Manor fell in a storm in 1820, but cuttings were preserved",
            "Newton's actual description of the apple incident: \"Why should that apple always descend perpendicularly to the ground? Why should it not go sideways or upwards, but constantly to the earth's center?\"",
            "The tree typically blossoms in April and produces fruit in early autumn",
            "Many physics students and professors make pilgrimages to see the tree"
          ]
        }
      },
      {
        id: "eagle-pub",
        name: "The Eagle Pub",
        category: "physics",
        location: "Benet Street",
        emoji: "🍺",
        description: "Where DNA structure was announced",
        access: "Public; busy at lunch",
        details: {
          hours: "Typical pub hours (11am-11pm)",
          significance: "On February 28, 1953, Francis Crick announced they had discovered \"the secret of life\".",
          notes: [
            "One of Cambridge's oldest pubs, dating back to the 14th century",
            "The exact spot where Crick made his famous announcement is marked with a commemorative plaque",
            "Watson and Crick were regular patrons who would discuss their work on DNA structure over lunch",
            "The pub was frequented by many other Cambridge scientists including those working on radar during WWII",
            "The RAF Bar's ceiling contains signatures, squadron numbers, and messages from Allied airmen during WWII",
            "Airmen used candles, lighters, and lipstick to leave their marks",
            "Some ceiling graffiti was created by servicemen who didn't return from missions, making it a poignant memorial",
            "The Eagle is owned by Corpus Christi College and has been a pub since at least 1667",
            "The pub serves a special beer called \"Eagle's DNA\" to commemorate its connection to the scientific breakthrough",
            "Rosalind Franklin, whose X-ray crystallography work was crucial to understanding DNA structure, rarely joined Watson and Crick here"
          ]
        }
      },
      {
        id: "corpus-clock",
        name: "Corpus Clock & Chronophage",
        category: "physics",
        location: "Trumpington Street",
        emoji: "⏱️",
        description: "Unique timepiece with philosophical significance",
        access: "Visible from street 24/7",
        details: {
          significance: "Unveiled in 2008 by Stephen Hawking.",
          notes: [
            "Has no hands or digital numbers - displays time through slits in the face that light up",
            "The Chronophage (time-eater) is inspired by a grasshopper escapement in traditional clockmaking",
            "The creature atop the clock appears to devour time, representing that time is consumed as it passes",
            "The clock runs irregularly, sometimes speeding up, sometimes slowing down, occasionally stopping",
            "This irregular movement reflects the relativity of time perception in human experience",
            "Every hour, the clock appears to recalibrate with the sound of chains being dragged across a coffin",
            "Made of 24-carat gold-plated stainless steel and weighs over a ton",
            "Cost £1 million to build and was donated to Corpus Christi College by Dr. John C. Taylor",
            "The ripples on the clock face represent the Big Bang and the expansion of the universe",
            "The clock blinks once every minute, symbolizing mortality",
            "At night, the clock face is illuminated with blue LEDs, creating an eerie atmosphere"
          ]
        }
      },
      {
        id: "computing-history",
        name: "Centre for Computing History",
        category: "physics",
        location: "Coldham's Road",
        emoji: "💻",
        description: "Traces evolution from physics theory to computing",
        access: "Wed-Sun 10am-5pm; fee applies",
        details: {
          significance: "Demonstrates the link between theoretical physics, mathematics, and computing technology.",
          notes: [
            "Houses over 10,000 items related to the history of computing",
            "Collection includes a working EDSAC rebuild, one of the first British computers developed at Cambridge University",
            "Contains original hardware used by Cambridge physicists for calculations and simulations",
            "Exhibits include early magnetic core memory and vacuum tube components",
            "Displays explaining how theoretical physics concepts like quantum mechanics led to transistors and microchips",
            "Visitors can use working models of early computers including the BBC Micro, developed in Cambridge",
            "Includes exhibits on Alan Turing's work at Cambridge and his contributions to theoretical computer science",
            "The connection between Maxwell's equations, information theory, and modern computing is explored",
            "Showcases early artificial intelligence research conducted at Cambridge",
            "Collection of computer manuals and technical documentation from Cambridge University's early computing projects",
            "Maurice Wilkes' original papers on the development of EDSAC at Cambridge are preserved here"
          ]
        }
      },
      {
        id: "cambridge-press",
        name: "Cambridge University Press Bookshop",
        category: "bookshops",
        location: "1 Trinity Street",
        emoji: "📚",
        description: "World's oldest publishing house (est. 1534)",
        access: "Mon-Sat 9am-5:30pm, Sun 11am-5pm",
        details: {
          significance: "Cambridge University Press is the oldest publishing house in the world, established in 1534.",
          notes: [
            "King Henry VIII granted the University a charter to print \"all manner of books\"",
            "The bookshop building dates from the 18th century",
            "Contains first editions of important scientific and philosophical works published by the Press",
            "Many groundbreaking works in physics and philosophy were first published by Cambridge University Press",
            "The bookshop has a dedicated section for works by Cambridge-affiliated authors",
            "Special collections include the prestigious Cambridge Mathematical Library",
            "Books bearing the Cambridge University Press imprint have been continuously printed since 1584",
            "The staff can access the entire historical catalog, including rare and out-of-print volumes",
            "The philosophy section is particularly strong in analytic philosophy",
            "The physics section contains textbooks written by Nobel Prize winners from Cambridge",
            "Students receive discounts on academic titles with valid university identification"
          ]
        }
      },
      {
        id: "heffers",
        name: "Heffers Bookshop",
        category: "bookshops",
        location: "20 Trinity Street",
        emoji: "📚",
        description: "Academic books since 1876",
        access: "Mon-Sat 9am-5:30pm, Sun 11am-5pm",
        details: {
          significance: "One of the UK's most famous academic bookstores, a Cambridge institution since 1876.",
          notes: [
            "Founded in 1876 by William Heffer as a stationery shop",
            "The current location on Trinity Street has been its home since 1970",
            "The basement level contains one of the UK's best collections of academic philosophy books",
            "Heffers historically had its own publishing branch, which produced academic texts",
            "Long tradition of hosting book signings and lectures by prominent philosophers and physicists",
            "Stephen Hawking regularly held signings here for his new books",
            "The philosophy section is organized by philosophical tradition and time period",
            "The physics and mathematics sections are renowned for their comprehensiveness",
            "Maintains a \"Cambridge authors\" section featuring works by university-affiliated writers",
            "Became part of the Blackwell's group in 1999 but maintained its original name due to its heritage",
            "Staff are known for their subject expertise - many are former academics or graduate students",
            "They maintain a special order service for obscure academic texts not normally stocked in the UK"
          ]
        }
      },
      {
        id: "gdavid",
        name: "G. David Bookseller",
        category: "bookshops",
        location: "16 St Edward's Passage",
        emoji: "📚",
        description: "Rare and antiquarian books",
        access: "Mon-Sat 10am-5:30pm",
        details: {
          significance: "Trading in Cambridge since 1896, specializing in antiquarian and second-hand books.",
          notes: [
            "The shop specializes in antiquarian and second-hand books, with particular strength in academic subjects",
            "The cramped, maze-like interior has remained largely unchanged for decades, with books stacked everywhere",
            "Many items are not priced, requiring customers to ask - which often leads to fascinating conversations",
            "The philosophy collection includes rare first editions of works by Wittgenstein, Russell, and other Cambridge philosophers",
            "The science section contains historical works that show the development of physics theories over centuries",
            "The shop has supplied books to Cambridge University libraries and colleges to fill gaps in their collections",
            "Behind the public area is a large storage facility containing thousands more books not on display",
            "The owner maintains connections with academic estate sales and often acquires complete libraries from deceased professors",
            "The narrow passageway it occupies (St Edward's Passage) has been a center for bookselling since the medieval period",
            "There is minimal organization system, encouraging serendipitous discoveries",
            "The building itself is historic, with sloping floors and original architectural features"
          ]
        }
      },
      {
        id: "haunted-bookshop",
        name: "Sarah Key's Haunted Bookshop",
        category: "bookshops",
        location: "9 St Edward's Passage",
        emoji: "📚",
        description: "Antiquarian books in haunted building",
        access: "Tue-Sat 10am-5pm",
        details: {
          significance: "Located in a 15th-century building that was originally part of an Augustinian friary.",
          notes: [
            "The name comes from reported paranormal activity, including a ghost known as the \"White Lady\"",
            "Owner Sarah Key is an expert on early edition children's books and antiquarian books",
            "The shop specializes in Alice in Wonderland editions and Lewis Carroll materials",
            "The building features original medieval beams and an ancient fireplace",
            "The shop has been featured in several paranormal investigation television programs",
            "Some of the ghost stories relate to a former resident who was reportedly a practicing alchemist",
            "The shop houses a collection of historical scientific and philosophical texts, often with unique bindings",
            "Sarah Key has authored guides to book collecting and can offer expertise on rare editions",
            "The shop contains one of the best collections of vintage Penguin paperbacks in the UK",
            "The ghost stories include books mysteriously falling from shelves and sudden temperature drops",
            "The building is one of the oldest continuously occupied commercial premises in Cambridge"
          ]
        }
      },
      {
        id: "oxfam",
        name: "Oxfam Bookshop",
        category: "bookshops",
        location: "28 Sidney Street",
        emoji: "📚",
        description: "Second-hand academic books",
        access: "Mon-Sat 9am-5:30pm, Sun 11am-5pm",
        details: {
          significance: "Purchases support Oxfam's charitable work.",
          notes: [
            "Cambridge's Oxfam Bookshop is considered one of the best in the Oxfam network due to donations from academics",
            "Many retired professors donate their personal libraries, resulting in rare and specialized academic works",
            "The philosophy section often contains out-of-print titles and international editions not easily found elsewhere",
            "The science section frequently includes technical books and journals donated by researchers",
            "Books often contain marginalia and notes from Cambridge academics, adding historical interest",
            "The shop is staffed primarily by volunteers, many with academic backgrounds",
            "Limited edition signed copies occasionally appear when authors donate their own works",
            "A \"rare books\" section contains more valuable items, sometimes including first editions of philosophical works",
            "All proceeds support Oxfam's global poverty relief efforts",
            "The shop has built relationships with university departments that regularly donate excess books",
            "Staff can keep a \"wants list\" for customers looking for specific titles",
            "The shop has a reputation for occasionally having valuable books priced well below market value"
          ]
        }
      },
      {
        id: "wittgenstein-tour",
        name: "Wittgenstein Walking Tour",
        category: "activities",
        location: "Various sites throughout Cambridge",
        emoji: "🚶",
        description: "Follow Wittgenstein's Cambridge footsteps",
        access: "Self-guided; free",
        details: {
          duration: "Approximately 1.5-2 hours",
          notes: [
            "Begins at Trinity College, where Wittgenstein was both a student and later a fellow",
            "Includes Whewell's Court where Wittgenstein had rooms when he first arrived in Cambridge in 1911",
            "Passes the old Moral Sciences Club meeting rooms where Wittgenstein famously confronted Karl Popper",
            "Includes 78 Storey's Way, a private residence where Wittgenstein lived while working on his later philosophy",
            "Visits the former location of the Copper Kettle café on Kings Parade, where Wittgenstein would meet with students",
            "Includes the old lecture rooms in King's College where Wittgenstein delivered his revolutionary lectures",
            "Passes by G.E. Moore's house, Wittgenstein's friend and philosophical influence",
            "Includes the site of the original Cavendish Laboratory where Wittgenstein conducted experiments",
            "The route traces Wittgenstein's famous walking routes where he would engage in philosophical discussions",
            "Ends at the Ascension Parish Burial Ground where Wittgenstein is buried",
            "Each location includes information about specific philosophical ideas that were developed there",
            "Walking the same streets as Wittgenstein offers insight into how everyday Cambridge influenced his philosophical thinking"
          ]
        }
      },
      {
        id: "punting",
        name: "Punting Tour",
        category: "activities",
        location: "Various operators along the River Cam",
        emoji: "🛶",
        description: "See Cambridge from the river",
        access: "£12-25 per person",
        details: {
          duration: "Typically 45 minutes to 1 hour",
          best_time: "Late afternoon for best light",
          notes: [
            "Punting began as practical transportation but became a leisure activity in Edwardian times",
            "The Mathematical Bridge at Queens' College is officially called the Wooden Bridge but got its nickname due to its ingenious design",
            "Contrary to myth, the bridge was not designed by Isaac Newton (he died 22 years before it was built)",
            "The bridge appears to be an arc but is actually made of straight timbers arranged tangentially",
            "Many punt guides know anecdotes about famous physicists and philosophers who studied at riverside colleges",
            "The College Backs (the riverside areas behind the colleges) offer perspectives not visible from the street",
            "The river passes directly behind Trinity College, where many famous scientists and philosophers lived",
            "Evening punting provides a different atmosphere with buildings illuminated and fewer tourists",
            "The punting route passes under the Bridge of Sighs at St John's College, modeled after the bridge in Venice",
            "The flat-bottomed punts are propelled by pushing against the riverbed with a 16-foot pole",
            "Some punt operators offer specialized tours focusing on scientific or philosophical history"
          ]
        }
      },
      {
        id: "botanic-garden",
        name: "Cambridge Botanic Garden",
        category: "activities",
        location: "1 Brookside",
        emoji: "🌿",
        description: "Scientific garden with research history",
        access: "£7.00; 10am-6pm Apr-Sep, 10am-5pm Oct-Mar",
        details: {
          significance: "Established in 1846 by Professor John Stevens Henslow, Charles Darwin's mentor.",
          notes: [
            "Designed as a living laboratory for the study of plant taxonomy and relationships",
            "Instrumental in the development of genetics through research on plant breeding",
            "The Systematic Beds display plants according to their evolutionary relationships",
            "Houses over 8,000 plant species from around the world",
            "The Glasshouses contain plants from nine different climate zones",
            "The historic Chronological Bed shows the introduction of plants to British gardens over the centuries",
            "The Genetics Garden demonstrates Gregor Mendel's principles and modern understanding of plant genetics",
            "Many plants were gathered by famous scientific expeditions, including Darwin's voyage on the Beagle",
            "The garden maintains a seed bank as part of international conservation efforts",
            "Research on plant physiology conducted here has contributed to understanding climate change",
            "Isaac Newton's apple tree has a descendant growing in the garden",
            "The garden archives contain correspondence between botanists and philosophers of science"
          ]
        }
      },
      {
        id: "round-church",
        name: "The Round Church",
        category: "activities",
        location: "Round Church Street",
        emoji: "👻",
        description: "One of only four round churches in England",
        access: "Small fee; Mon-Sat 10am-5pm, limited hours Sunday",
        details: {
          significance: "Based on the Church of the Holy Sepulchre in Jerusalem.",
          notes: [
            "The church's proper name is the Church of the Holy Sepulchre",
            "Built by the Fraternity of the Holy Sepulchre, a group of crusaders who had visited Jerusalem",
            "One of only four medieval round churches still standing in England",
            "The round shape is symbolic of Christ's resurrection and eternal life",
            "The original structure was purely circular; the rectangular chancel was added in the 15th century",
            "During the English Civil War, Cromwell's soldiers used it as a training and drill hall",
            "Nearly demolished in the 19th century due to structural problems, but saved by the Cambridge Camden Society",
            "The interior features striking Norman architecture with massive cylindrical pillars",
            "The acoustics inside the circular nave create interesting sound effects due to its shape",
            "Philosophical debates on the nature of faith and reason were held here during the Reformation",
            "The building represents the intersection of religious faith, medieval engineering, and geometric principles",
            "The current exhibition often focuses on the impact of Christianity on thought and education in Cambridge"
          ]
        }
      },
      {
        id: "kings-college",
        name: "King's College Chapel",
        category: "other",
        location: "King's Parade",
        emoji: "🏛️",
        description: "Gothic masterpiece with fan vaults",
        access: "Entrance fee; check for closing times",
        details: {
          significance: "Finest example of late Perpendicular Gothic architecture, started in 1446 by Henry VI.",
          notes: [
            "Took over a century to complete, spanning the reigns of six monarchs from Henry VI to Henry VIII",
            "The fan vaulting is the largest of its kind in the world",
            "Houses Rubens' masterpiece \"The Adoration of the Magi\" as its altarpiece",
            "The 26 stained glass windows date from the early 16th century and survived the English Civil War",
            "The acoustic properties are remarkable, with a six-second reverberation time",
            "The annual Christmas Eve service \"A Festival of Nine Lessons and Carols\" has been broadcast since 1928",
            "The organ is contained within the ornate screen, a gift from King Henry VIII",
            "The mathematical precision of the architecture demonstrates emerging scientific principles",
            "The stonework features heraldic symbols of the Houses of Lancaster, York, and Tudor",
            "The chapel stands as a testament to medieval engineering, built without modern technology",
            "Physicists have studied the chapel's acoustics to understand sound propagation in large stone structures",
            "Architectural historians consider it the finest example of English gothic architecture"
          ]
        }
      },
      {
        id: "cambridge-market",
        name: "Cambridge Market",
        category: "other",
        location: "Market Square",
        emoji: "🏛️",
        description: "Historic market with food stalls",
        access: "Daily 10am-4pm",
        details: {
          significance: "Market has operated on this site since the Middle Ages.",
          notes: [
            "Located in the heart of Cambridge, surrounded by colleges and historic buildings",
            "Food options include Malaysian nasi lemak, African vegetable platters, Chinese jianbing crepes, Mediterranean falafels",
            "Also sells books, crafts, local produce",
            "Good spot for quick, affordable meals while exploring the city",
            "The market square is paved with cobblestones and has a traditional English market atmosphere",
            "Often features street performers and musicians",
            "In December, transforms into a Christmas market with seasonal goods"
          ]
        }
      }
    ]
  };
  
  // File: pages/_app.js
  import '../styles/globals.css';
  
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  
  export default MyApp;
  
  // File: pages/index.js
  import { useState, useEffect } from 'react';
  import Head from 'next/head';
  import { MagnifyingGlassIcon, MoonIcon, SunIcon, MapIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
  import { cambridgeData } from '../data/cambridgeData';
  import clsx from 'clsx';
  
  export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMap, setShowMap] = useState(false);
  
    useEffect(() => {
      // Check system preference for dark mode
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    }, []);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    const filteredLocations = cambridgeData.locations.filter(location => {
      const matchesCategory = activeCategory === 'all' || location.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  
    const handleLocationClick = (location) => {
      setSelectedLocation(location);
      window.scrollTo(0, 0);
    };
  
    const handleBackClick = () => {
      setSelectedLocation(null);
    };
  
    return (
      <div className={clsx('min-h-screen transition-colors duration-200', {
        'dark bg-dark-900 text-white': darkMode,
        'bg-gray-100 text-gray-900': !darkMode
      })}>
        <Head>
          <title>Cambridge Explorer: Philosophy & Physics</title>
          <meta name="description" content="Interactive guide to philosophy and physics sites in Cambridge" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <header className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Cambridge Explorer</h1>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowMap(!showMap)}
                  className={clsx('p-2 rounded-full', {
                    'bg-dark-800 text-white': darkMode && showMap,
                    'bg-gray-200 text-dark-900': darkMode && !showMap,
                    'bg-primary-100 text-primary-800': !darkMode && showMap,
                    'bg-white text-gray-800': !darkMode && !showMap
                  })}
                  aria-label="Toggle map view"
                >
                  <MapIcon className="h-5 w-5" />
                </button>
                <button 
                  onClick={toggleDarkMode}
                  className={clsx('p-2 rounded-full', {
                    'bg-dark-800 text-white': darkMode,
                    'bg-white text-gray-800': !darkMode
                  })}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className={clsx('w-full pl-10 pr-4 py-2 rounded-lg', {
                  'bg-dark-800 text-white placeholder-gray-400 border-gray-700': darkMode,
                  'bg-white text-gray-900 placeholder-gray-500 border-gray-300': !darkMode
                })}
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
  
            <div className="flex overflow-x-auto pb-2 gap-2">
              <button
                className={clsx('px-3 py-1 rounded-full whitespace-nowrap', {
                  'bg-primary-600 text-white': activeCategory === 'all',
                  'bg-dark-800 text-gray-200 hover:bg-dark-700': darkMode && activeCategory !== 'all',
                  'bg-white text-gray-800 hover:bg-gray-100': !darkMode && activeCategory !== 'all'
                })}
                onClick={() => setActiveCategory('all')}
              >
                All Sites
              </button>
              {cambridgeData.categories.map(category => (
                <button
                  key={category.id}
                  className={clsx('px-3 py-1 rounded-full whitespace-nowrap flex items-center', {
                    'text-white': activeCategory === category.id,
                    'bg-dark-800 text-gray-200 hover:bg-dark-700': darkMode && activeCategory !== category.id,
                    'bg-white text-gray-800 hover:bg-gray-100': !darkMode && activeCategory !== category.id,
                    [category.color]: activeCategory === category.id
                  })}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="mr-1">{category.emoji}</span> {category.title}
                </button>
              ))}
            </div>
          </header>
  
          <main>
            {selectedLocation ? (
              <div className={clsx('rounded-lg overflow-hidden mb-6', {
                'bg-dark-800': darkMode,
                'bg-white shadow': !darkMode
              })}>
                <div className={clsx('p-4 border-b', {
                  'border-gray-700': darkMode,
                  'border-gray-200': !darkMode
                })}>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold flex items-center">
                      <span className="mr-2">{selectedLocation.emoji}</span> {selectedLocation.name}
                    </h2>
                    <button
                      className={clsx('px-3 py-1 rounded', {
                        'bg-dark-900 text-gray-300 hover:bg-gray-700': darkMode,
                        'bg-gray-200 text-gray-700 hover:bg-gray-300': !darkMode
                      })}
                      onClick={handleBackClick}
                    >
                      Back
                    </button>
                  </div>
                  <p className="text-sm mt-1">
                    {selectedLocation.location} • {selectedLocation.access}
                  </p>
                </div>
                
                <div className="p-4">
                  <div className={clsx('mb-4 p-3 rounded-lg', {
                    'bg-dark-900': darkMode,
                    'bg-gray-100': !darkMode
                  })}>
                    <h3 className="font-medium flex items-center">
                      <InformationCircleIcon className="h-5 w-5 mr-1 text-primary-600" />
                      About this Location
                    </h3>
                    <p className="mt-1">{selectedLocation.description}</p>
                    {selectedLocation.details.significance && (
                      <p className="mt-2">{selectedLocation.details.significance}</p>
                    )}
                    {selectedLocation.details.hours && (
                      <p className="mt-2"><strong>Hours:</strong> {selectedLocation.details.hours}</p>
                    )}
                    {selectedLocation.details.duration && (
                      <p className="mt-2"><strong>Duration:</strong> {selectedLocation.details.duration}</p>
                    )}
                    {selectedLocation.details.best_time && (
                      <p className="mt-2"><strong>Best Time:</strong> {selectedLocation.details.best_time}</p>
                    )}
                  </div>
                  
                  <h3 className="font-medium mb-2">What to Know</h3>
                  <ul className="space-y-2">
                    {selectedLocation.details.notes.map((note, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2 text-primary-600">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                {!showMap ? (
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    {filteredLocations.map(location => (
                      <div
                        key={location.id}
                        className={clsx('rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-102', {
                          'bg-dark-800 hover:bg-dark-700': darkMode,
                          'bg-white shadow hover:shadow-md': !darkMode
                        })}
                        onClick={() => handleLocationClick(location)}
                      >
                        <div className="p-4">
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">{location.emoji}</span>
                            <div>
                              <h2 className="font-medium">{location.name}</h2>
                              <p className={clsx('text-sm', {
                                'text-gray-300': darkMode,
                                'text-gray-600': !darkMode
                              })}>
                                {location.description}
                              </p>
                              <p className={clsx('text-xs mt-1', {
                                'text-gray-400': darkMode,
                                'text-gray-500': !darkMode
                              })}>
                                {location.location} • {location.access}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={clsx('rounded-lg overflow-hidden p-4 relative', {
                    'bg-dark-800': darkMode,
                    'bg-white shadow': !darkMode
                  })}>
                    <div className="h-96 relative">
                      <div className="absolute inset-0">
                        {/* Simplified Cambridge map */}
                        <svg width="100%" height="100%" viewBox="0 0 800 600" className={clsx('rounded-lg', {
                          'bg-dark-900': darkMode,
                          'bg-gray-100': !darkMode
                        })}>
                          {/* River Cam */}
                          <path d="M350,50 Q400,300 350,550" stroke="#6EA4D3" strokeWidth="20" fill="none" />
                          
                          {/* Main streets */}
                          <path d="M100,300 L700,300" stroke={darkMode ? "#444" : "#ccc"} strokeWidth="10" fill="none" />
                          <path d="M400,100 L400,500" stroke={darkMode ? "#444" : "#ccc"} strokeWidth="10" fill="none" />
                          <path d="M200,150 L600,450" stroke={darkMode ? "#333" : "#ddd"} strokeWidth="5" fill="none" />
                          <path d="M200,450 L600,150" stroke={darkMode ? "#333" : "#ddd"} strokeWidth="5" fill="none" />
                          
                          {/* Central Cambridge */}
                          <rect x="320" y="220" width="160" height="160" fill={darkMode ? "#555" : "#e2e8f0"} rx="5" />
                          <text x="400" y="300" fontSize="12" textAnchor="middle" fill={darkMode ? "#aaa" : "#666"} fontWeight="bold">
                            CITY CENTER
                          </text>
                          
                          {/* Location markers */}
                          {filteredLocations.map((location) => {
                            // Position markers based on location type
                            let x, y;
                            if (location.id === 'wittgenstein-room' || location.id === 'russell-rooms' || location.id === 'wren-library' || location.id === 'newton-apple-tree') {
                              // Trinity College area
                              x = 370 + (Math.random() * 30);
                              y = 270 + (Math.random() * 30);
                            } else if (location.id === 'cavendish-laboratory') {
                              // West Cambridge
                              x = 150 + (Math.random() * 50);
                              y = 200 + (Math.random() * 50);
                            } else if (location.id === 'wittgenstein-grave') {
                              // North Cambridge
                              x = 300 + (Math.random() * 50);
                              y = 100 + (Math.random() * 50);
                            } else if (location.id === 'computing-history') {
                              // East Cambridge
                              x = 600 + (Math.random() * 50);
                              y = 300 + (Math.random() * 50);
                            } else if (location.id === 'fitzwilliam-museum' || location.id === 'corpus-clock') {
                              // South Cambridge
                              x = 400 + (Math.random() * 50);
                              y = 450 + (Math.random() * 50);
                            } else if (location.id === 'botanic-garden') {
                              // South Cambridge
                              x = 450 + (Math.random() * 50);
                              y = 500 + (Math.random() * 50);
                            } else {
                              // Random position in central area
                              x = 320 + (Math.random() * 160);
                              y = 220 + (Math.random() * 160);
                            }
                            
                            // Determine color based on category
                            let color;
                            const category = cambridgeData.categories.find(c => c.id === location.category);
                            color = category.color.replace('bg-', '').replace('-700', '-500');
                            
                            return (
                              <g 
                                key={location.id}
                                onClick={() => handleLocationClick(location)}
                                className="cursor-pointer"
                              >
                                <circle 
                                  cx={x} 
                                  cy={y} 
                                  r="10" 
                                  fill={color}
                                  stroke={darkMode ? "#fff" : "#fff"} 
                                  strokeWidth="2"
                                />
                                <text 
                                  x={x} 
                                  y={y + 25} 
                                  fontSize="10" 
                                  textAnchor="middle" 
                                  fill={darkMode ? "#ddd" : "#333"} 
                                  fontWeight="bold"
                                >
                                  {location.name.length > 20 ? location.name.substring(0, 18) + "..." : location.name}
                                </text>
                              </g>
                            );
                          })}
                          
                          {/* North indicator */}
                          <g transform="translate(750, 70)">
                            <circle r="20" fill={darkMode ? "#333" : "#f8fafc"} stroke={darkMode ? "#666" : "#cbd5e1"} strokeWidth="2" />
                            <text x="0" y="0" fontSize="14" textAnchor="middle" dominantBaseline="middle" fill={darkMode ? "#ddd" : "#475569"}>N</text>
                          </g>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Click a location for details</h3>
                      <div className="flex flex-wrap gap-2">
                        {cambridgeData.categories.map(category => (
                          <div key={category.id} className="flex items-center text-sm">
                            <div className={`w-3 h-3 rounded-full mr-1 ${category.color.replace('700', '500')}`}></div>
                            <span>{category.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
  
          <footer className={clsx('mt-8 pt-4 text-center text-sm', {
            'text-gray-400 border-t border-gray-800': darkMode,
            'text-gray-500 border-t border-gray-200': !darkMode
          })}>
            <p>Cambridge Explorer: Philosophy & Physics Guide</p>
            <p className="mt-1">Created for exploring the rich academic heritage of Cambridge</p>
          </footer>
        </div>
      </div>
    );
  }
  
  // File: styles/globals.css
  // This will be a simple file to import Tailwind
  `@tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  .transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  
  .hover\:scale-102:hover {
    --tw-scale-x: 1.02;
    --tw-scale-y: 1.02;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  `