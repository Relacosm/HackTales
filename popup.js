const stories = [
  {
    title: "The First Computer Bug",
    content: "In 1947, Grace Hopper found an actual moth causing issues in the Harvard Mark II computer. The moth was taped into the logbook with the note: 'First actual case of bug being found.' This moment in computing history gave rise to the terms 'bug' and 'debugging'.",
    links: [
      {
        text: "Smithsonian Institution Archive",
        url: "https://americanhistory.si.edu/collections/search/object/nmah_334663"
      },
      {
        text: "Computer History Museum",
        url: "https://computerhistory.org/blog/the-first-computer-bug/"
      }
    ]
  },
  {
    title: "The Billion Dollar Space Math Error",
    content: "In 1999, NASA lost the $125 million Mars Climate Orbiter because one team used metric units while another used imperial units. The spacecraft came too close to Mars' atmosphere and disintegrated. This incident highlights the critical importance of consistent unit systems in programming.",
    links: [
      {
        text: "NASA's Official Report",
        url: "https://science.nasa.gov/mission_pages/msp98/news/msp98_news_0930_1"
      },
      {
        text: "NASA JPL Analysis",
        url: "https://www.jpl.nasa.gov/missions/mars-climate-orbiter"
      }
    ]
  },
  {
    title: "The AWS Typo That Broke The Internet",
    content: "In 2017, an Amazon Web Services employee made a typo during a routine debugging task, accidentally taking down a large portion of the internet for several hours. The incident affected major services like Quora, Medium, and many others, showing how a single character can have massive consequences.",
    links: [
      {
        text: "AWS Post-Mortem",
        url: "https://aws.amazon.com/message/41926/"
      }
    ]
  },
  {
    title: "The Unix Time Overflow Bug",
    content: "The Y2K38 problem is coming when Unix time stamps will overflow 32-bit integers. Like Y2K, this requires massive system updates. The timestamp will overflow at 03:14:07 UTC on 19 January 2038, potentially affecting millions of systems.",
    links: [
      {
        text: "Linux Foundation Article",
        url: "https://www.linuxfoundation.org/blog/blog/unix-time-preparing-for-the-2038-system-clock-bug"
      }
    ]
  },
  {
    title: "The Story of Linux",
    content: "In 1991, Linus Torvalds posted: 'I'm doing a (free) operating system (just a hobby, won't be big and professional like GNU)'. Today, Linux runs 96.3% of the world's top 1 million servers, the Android OS, and most supercomputers.",
    links: [
      {
        text: "Original Announcement",
        url: "https://groups.google.com/g/comp.os.minix/c/dlNtH7RRrGA/m/SwRavCzVE7gJ"
      },
      {
        text: "Linux Foundation History",
        url: "https://www.linuxfoundation.org/about/linux-history"
      }
    ]
  },
  {
    title: "The Birth of Git",
    content: "Linus Torvalds created Git in just 10 days in 2005. The Linux community's proprietary version control system changed license terms, so Torvalds built Git as a replacement. Now it's the most widely used version control system in the world.",
    links: [
      {
        text: "Git Project History",
        url: "https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git"
      }
    ]
  },
  {
    title: "The Story of Python's Name",
    content: "Guido van Rossum named Python after 'Monty Python's Flying Circus', not the snake. He wanted a short, unique, and slightly mysterious name. The connection to comedy reflects Python's philosophy of making programming fun.",
    links: [
      {
        text: "Python's Origin",
        url: "https://docs.python.org/3/faq/general.html#why-is-it-called-python"
      }
    ]
  },
  {
    title: "The Heartbleed Bug",
    content: "Discovered in 2014, Heartbleed was a serious vulnerability in the OpenSSL cryptographic software library. It allowed attackers to steal information protected by SSL/TLS encryption, affecting millions of websites.",
    links: [
      {
        text: "Heartbleed Security Advisory",
        url: "https://www.openssl.org/news/secadv/20140407.txt"
      },
      {
        text: "Heartbleed Explained",
        url: "https://www.cnet.com/news/what-is-heartbleed/"
      }
    ]
  },
  {
    title: "The Y2K Bug",
    content: "The Year 2000 problem, or Y2K bug, was a computer flaw that caused problems when processing dates beyond December 31, 1999. Despite predictions of widespread failures, the transition to the new millennium occurred with minimal disruptions.",
    links: [
      {
        text: "Y2K Timeline",
        url: "https://en.wikipedia.org/wiki/Year_2000_problem"
      },
      {
        text: "Y2K Lessons Learned",
        url: "https://www.c-span.org/video/?160394-1/year-2000-problem"
      }
    ]
  },
  {
    title: "The Ariane 5 Rocket Failure",
    content: "In 1996, the Ariane 5 rocket exploded just 37 seconds after launch due to a software error in converting a 64-bit floating-point number to a 16-bit signed integer.",
    links: [
      {
        text: "Ariane 5 Flight 501 Report",
        url: "https://en.wikipedia.org/wiki/Ariane_5#Flight_501"
      }
    ]
  },
  {
    title: "The Microsoft Blue Screen of Death",
    content: "The infamous Blue Screen of Death (BSOD) is a stop error screen that appears in Windows operating systems when a fatal system error occurs. It has become a symbol of Windows' fragility.",
    links: [
      {
        text: "Understanding BSOD",
        url: "https://en.wikipedia.org/wiki/Blue_Screen_of_Death"
      }
    ]
  },
  {
    title: "The 2016 Dyn Cyberattack",
    content: "In October 2016, a massive DDoS attack on Dyn, a DNS provider, caused widespread outages of major websites including Twitter, Netflix, and Reddit.",
    links: [
      {
        text: "Dyn Cyberattack Overview",
        url: "https://www.nytimes.com/2016/10/22/technology/dyn-cyberattack.html"
      }
    ]
  },
  {
    title: "The Facebook Data Breach",
    content: "In 2019, Facebook faced a major data breach affecting millions of users, highlighting the importance of data privacy and security in the digital age.",
    links: [
      {
        text: "Facebook Data Breach Details",
        url: "https://www.bbc.com/news/technology-48913956"
      }
    ]
  },
  {
    title: "The Equifax Data Breach",
    content: "In 2017, Equifax suffered a data breach exposing sensitive personal information of approximately 147 million people, raising concerns about data security and corporate responsibility.",
    links: [
      {
        text: "Equifax Breach Overview",
        url: "https://www.ftc.gov/equifax-data-breach"
      }
    ]
  },
  {
    title: "The WannaCry Ransomware Attack",
    content: "In May 2017, the WannaCry ransomware attack affected thousands of computers worldwide, encrypting files and demanding ransom payments in Bitcoin.",
    links: [
      {
        text: "WannaCry Overview",
        url: "https://www.bbc.com/news/technology-39920147"
      }
    ]
  },
  {
    title: "The Stuxnet Worm",
    content: "Discovered in 2010, Stuxnet was a computer worm that targeted Iranian nuclear facilities, demonstrating the potential for cyber warfare.",
    links: [
      {
        text: "Stuxnet Overview",
        url: "https://en.wikipedia.org/wiki/Stuxnet"
      }
    ]
  },
  {
    title: "The Tesla Autopilot Crash",
    content: "In 2016, a Tesla vehicle operating on Autopilot mode was involved in a fatal crash, raising questions about the safety and reliability of autonomous driving technology.",
    links: [
      {
        text: "Tesla Autopilot Incident",
        url: "https://www.nytimes.com/2016/07/01/business/tesla-autopilot-crash.html"
      }
    ]
  },
  {
    title: "The F8 Developer Conference",
    content: "At Facebook's F8 conference in 2016, Mark Zuckerberg announced significant updates to the platform, including the introduction of Live Video and 360-degree photos.",
    links: [
      {
        text: "F8 2016 Highlights",
        url: "https://www.theverge.com/2016/4/12/11426784/facebook-f8-2016-live-video-360-photo"
      }
    ]
  },
  {
    title: "The Launch of the iPhone",
    content: "In 2007, Apple introduced the first iPhone, revolutionizing the smartphone industry and changing how we interact with technology.",
    links: [
      {
        text: "iPhone Launch Announcement",
        url: "https://www.apple.com/newsroom/2007/01/09Apple-Introduces-iPhone/"
      }
    ]
  },
  {
    title: "The Google Search Algorithm Update",
    content: "Google's Panda update in 2011 aimed to lower the rank of low-quality sites in search results, significantly impacting SEO strategies.",
    links: [
      {
        text: "Google Panda Update",
        url: "https://en.wikipedia.org/wiki/Panda_Update"
      }
    ]
  },
  {
    title: "The Introduction of Bitcoin",
    content: "In 2009, Bitcoin was launched as the first decentralized cryptocurrency, paving the way for blockchain technology and a new era of digital currencies.",
    links: [
      {
        text: "Bitcoin Whitepaper",
        url: "https://bitcoin.org/bitcoin.pdf"
      }
    ]
  },
  {
    title: "The Rise of Social Media",
    content: "The launch of Facebook in 2004 and Twitter in 2006 marked a significant shift in how people communicate and share information online.",
    links: [
      {
        text: "Facebook Launch History",
        url: "https://en.wikipedia.org/wiki/Facebook#History"
      },
      {
        text: "Twitter Launch Overview",
        url: "https://en.wikipedia.org/wiki/Twitter#History"
      }
    ]
  },
  {
    title: "The Launch of Windows 95",
    content: "In 1995, Microsoft launched Windows 95, a revolutionary operating system that introduced the Start menu and taskbar, changing the user interface landscape.",
    links: [
      {
        text: "Windows 95 Launch",
        url: "https://en.wikipedia.org/wiki/Windows_95"
      }
    ]
  },
  {
    title: "The Introduction of the World Wide Web",
    content: "In 1991, Tim Berners-Lee introduced the World Wide Web, forever changing how information is shared and accessed globally.",
    links: [
      {
        text: "History of the Web",
        url: "https://www.w3.org/History.html"
      }
    ]
  },
  {
    title: "The Creation of Java",
    content: "James Gosling and his team at Sun Microsystems created the Java programming language in 1995, which has since become one of the most widely used languages in the world.",
    links: [
      {
        text: "Java History",
        url: "https://www.oracle.com/java/technologies/javase/whatsnew/history.html"
      }
    ]
  },
  {
    title: "The Launch of YouTube",
    content: "In 2005, YouTube was founded, revolutionizing how videos are shared and consumed online, leading to the rise of content creators.",
    links: [
      {
        text: "YouTube Launch Story",
        url: "https://en.wikipedia.org/wiki/YouTube#History"
      }
    ]
  },
  {
    title: "The Development of Android",
    content: "Android was launched in 2008, providing a flexible platform for mobile devices and quickly becoming the world's most popular mobile operating system.",
    links: [
      {
        text: "Android History",
        url: "https://en.wikipedia.org/wiki/Android_(operating_system)#History"
      }
    ]
  },
  {
    title: "The Introduction of Cloud Computing",
    content: "In the early 2000s, cloud computing emerged as a model for delivering computing resources over the internet, changing how businesses operate.",
    links: [
      {
        text: "Cloud Computing Overview",
        url: "https://en.wikipedia.org/wiki/Cloud_computing#History"
      }
    ]
  },
  {
    title: "The Rise of E-Commerce",
    content: "Amazon was founded in 1994, and its growth marked the beginning of the e-commerce revolution, changing retail forever.",
    links: [
      {
        text: "Amazon History",
        url: "https://en.wikipedia.org/wiki/Amazon_(company)#History"
      }
    ]
  },
  {
    title: "The Development of the Internet of Things (IoT)",
    content: "The concept of IoT gained traction in the 2010s, leading to the integration of smart devices into everyday life.",
    links: [
      {
        text: "IoT Overview",
        url: "https://en.wikipedia.org/wiki/Internet_of_things"
      }
    ]
  },
  {
    title: "The Release of MATLAB",
    content: "MATLAB, a programming language and interactive environment for numerical computation and visualization, was first released in 1984.",
    links: [
      {
        text: "MATLAB History",
        url: "https://en.wikipedia.org/wiki/MATLAB#History"
      }
    ]
  },
  {
    title: "The First Computer Virus",
    content: "The first computer virus, known as 'Creeper', was created in the early 1970s. It was a self-replicating program that infected computers on the ARPANET.",
    links: [
      {
        text: "Creeper Virus Overview",
        url: "https://en.wikipedia.org/wiki/Creeper_program"
      }
    ]
  },
  {
    title: "The Invention of the World Wide Web Browser",
    content: "The first web browser, WorldWideWeb, was invented by Tim Berners-Lee in 1990, making it easier to navigate the emerging World Wide Web.",
    links: [
      {
        text: "WorldWideWeb Browser History",
        url: "https://en.wikipedia.org/wiki/WorldWideWeb_(web_browser)"
      }
    ]
  },
  {
    title: "The Launch of the Raspberry Pi",
    content: "In 2012, the Raspberry Pi was launched, providing an affordable way for people to learn programming and electronics.",
    links: [
      {
        text: "Raspberry Pi Overview",
        url: "https://www.raspberrypi.org/about/"
      }
    ]
  },
  {
    title: "The Invention of the Email",
    content: "Email was developed in the early 1970s by Ray Tomlinson, who is credited with sending the first network email.",
    links: [
      {
        text: "Email History",
        url: "https://en.wikipedia.org/wiki/Email#History"
      }
    ]
  },
  {
    title: "The Development of Machine Learning",
    content: "Machine learning gained popularity in the 2010s, enabling computers to learn from data and improve their performance over time.",
    links: [
      {
        text: "Machine Learning Overview",
        url: "https://en.wikipedia.org/wiki/Machine_learning"
      }
    ]
  },
  {
    title: "The Launch of LinkedIn",
    content: "LinkedIn was founded in 2003 as a professional networking site, which has since grown to become a major platform for career development.",
    links: [
      {
        text: "LinkedIn History",
        url: "https://en.wikipedia.org/wiki/LinkedIn#History"
      }
    ]
  },
  {
    title: "The Launch of Instagram",
    content: "Instagram was launched in 2010 as a photo-sharing app, quickly gaining popularity and later being acquired by Facebook.",
    links: [
      {
        text: "Instagram History",
        url: "https://en.wikipedia.org/wiki/Instagram#History"
      }
    ]
  },
  {
    title: "The Rise of Artificial Intelligence",
    content: "AI has seen significant advancements since the 1950s, with modern applications in various fields like healthcare, finance, and transportation.",
    links: [
      {
        text: "Artificial Intelligence Overview",
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence"
      }
    ]
  },
  {
    title: "The Launch of Cloudflare",
    content: "Founded in 2009, Cloudflare provides content delivery network services, internet security, and distributed domain name server services.",
    links: [
      {
        text: "Cloudflare Overview",
        url: "https://www.cloudflare.com/learning/how-cloudflare-works/"
      }
    ]
  },
  {
    title: "The Introduction of Web 2.0",
    content: "Web 2.0, a term popularized in the early 2000s, refers to the transition of the internet from static pages to dynamic, user-generated content.",
    links: [
      {
        text: "Web 2.0 Overview",
        url: "https://en.wikipedia.org/wiki/Web_2.0"
      }
    ]
  },
  {
    title: "The Creation of the App Store",
    content: "In 2008, Apple launched the App Store, allowing developers to distribute applications for iOS devices and revolutionizing the mobile app industry.",
    links: [
      {
        text: "App Store History",
        url: "https://en.wikipedia.org/wiki/App_Store"
      }
    ]
  },
  {
    title: "The Launch of Slack",
    content: "Slack was launched in 2013 as a collaboration tool, transforming how teams communicate and work together.",
    links: [
      {
        text: "Slack History",
        url: "https://en.wikipedia.org/wiki/Slack_(software)#History"
      }
      ]
    },
    {
      title: "The Introduction of Docker",
      content: "Docker was released in 2013, providing a platform for developers to automate the deployment of applications inside lightweight containers.",
      links: [
        {
          text: "Docker Overview",
          url: "https://www.docker.com/what-docker"
        }
      ]
    },
    {
      title: "The Launch of TikTok",
      content: "TikTok was launched in 2016, quickly becoming a global platform for short-form video content and social media engagement.",
      links: [
        {
          text: "TikTok History",
          url: "https://en.wikipedia.org/wiki/TikTok#History"
        }
      ]
    },
    {
      title: "The Development of Quantum Computing",
      content: "Quantum computing has emerged in the 21st century as a revolutionary technology with the potential to solve complex problems beyond the capabilities of classical computers.",
      links: [
        {
          text: "Quantum Computing Overview",
          url: "https://en.wikipedia.org/wiki/Quantum_computing"
        }
      ]
    },
    {
      title: "The Emergence of 5G Technology",
      content: "5G technology began rolling out in 2019, promising faster data speeds and improved connectivity for mobile devices.",
      links: [
        {
          text: "5G Technology Overview",
          url: "https://en.wikipedia.org/wiki/5G"
        }
      ]
    },
    {
      title: "The Rise of Augmented Reality",
      content: "Augmented reality (AR) gained traction in the 2010s, with applications in gaming, education, and training, notably with the release of Pokémon GO in 2016.",
      links: [
        {
          text: "Augmented Reality Overview",
          url: "https://en.wikipedia.org/wiki/Augmented_reality"
        }
      ]
    },
    {
      title: "The Launch of SpaceX's Falcon Heavy",
      content: "In 2018, SpaceX launched the Falcon Heavy, the most powerful operational rocket in the world, marking a significant milestone in space exploration.",
      links: [
        {
          text: "Falcon Heavy Overview",
          url: "https://en.wikipedia.org/wiki/Falcon_Heavy"
        }
      ]
    },
    {
      title: "The Introduction of E-Readers",
      content: "With the launch of devices like Amazon Kindle in 2007, e-readers transformed how people consume literature and information.",
      links: [
        {
          text: "Kindle History",
          url: "https://en.wikipedia.org/wiki/Amazon_Kindle#History"
        }
      ]
    },
    {
      title: "The Launch of the iPad",
      content: "Apple's iPad was launched in 2010, creating a new category of devices that bridged the gap between smartphones and laptops.",
      links: [
        {
          text: "iPad Overview",
          url: "https://en.wikipedia.org/wiki/IPad#History"
        }
      ]
    },
    {
      title: "The Development of Responsive Web Design",
      content: "Responsive web design emerged in the early 2010s, allowing websites to adapt to various screen sizes, improving user experience across devices.",
      links: [
        {
          text: "Responsive Web Design Overview",
          url: "https://en.wikipedia.org/wiki/Responsive_web_design"
        }
      ]
    },
    {
      title: "The Creation of the Agile Methodology",
      content: "Agile methodology was formalized in 2001, providing a framework for iterative and incremental development that has become widely adopted in software engineering.",
      links: [
        {
          text: "Agile Manifesto",
          url: "https://agilemanifesto.org/"
        }
      ]
    },
    {
      title: "The Rise of the Gig Economy",
      content: "The gig economy gained prominence in the 2010s with platforms like Uber and Upwork, changing the landscape of work and employment.",
      links: [
        {
          text: "Gig Economy Overview",
          url: "https://en.wikipedia.org/wiki/Gig_economy"
        }
      ]
    },
    {
      title: "The Introduction of Cryptocurrency Exchanges",
      content: "The first cryptocurrency exchanges emerged in the early 2010s, allowing users to trade cryptocurrencies and marking the beginning of a new financial ecosystem.",
      links: [
        {
          text: "Cryptocurrency Exchange Overview",
          url: "https://en.wikipedia.org/wiki/Cryptocurrency_exchange"
        }
      ]
    },
    {
      title: "The Launch of Zoom Video Communications",
      content: "Zoom was founded in 2011, providing video conferencing services that became essential for remote work and communication, especially during the COVID-19 pandemic.",
      links: [
        {
          text: "Zoom Overview",
          url: "https://zoom.us/about"
        }
      ]
    },
    {
      title: "The Development of 5G Technology",
      content: "5G technology began rolling out in 2019, promising faster speeds, lower latency, and the ability to connect a vast number of devices, revolutionizing mobile connectivity.",
      links: [
        {
          text: "5G Overview",
          url: "https://en.wikipedia.org/wiki/5G"
        }
      ]
    },
    {
      title: "The Rise of Cryptocurrency Exchanges",
      content: "Cryptocurrency exchanges like Coinbase launched in 2012, facilitating the trading of digital assets and contributing to the growth of the cryptocurrency market.",
      links: [
        {
          text: "Coinbase History",
          url: "https://www.coinbase.com/about"
        }
      ]
    },
    {
      title: "The Introduction of Virtual Reality",
      content: "Virtual reality gained mainstream attention with the release of the Oculus Rift in 2016, opening new possibilities for gaming and immersive experiences.",
      links: [
        {
          text: "Oculus Rift Overview",
          url: "https://en.wikipedia.org/wiki/Oculus_Rift"
        }
      ]
    },
    {
      title: "The Launch of TikTok",
      content: "TikTok was launched in 2016, quickly becoming a popular platform for short-form video content, especially among younger audiences.",
      links: [
        {
          text: "TikTok Overview",
          url: "https://en.wikipedia.org/wiki/TikTok"
        }
      ]
    },
    {
      title: "The Rise of Remote Work Tools",
      content: "The COVID-19 pandemic in 2020 accelerated the adoption of remote work tools like Zoom and Microsoft Teams, changing workplace dynamics permanently.",
      links: [
        {
          text: "Zoom Overview",
          url: "https://zoom.us/about"
        },
        {
          text: "Microsoft Teams Overview",
          url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
        }
      ]
    },
    {
      title: "The Launch of Spotify",
      content: "Spotify was founded in 2006, revolutionizing how people consume music through streaming and changing the music industry landscape.",
      links: [
        {
          text: "Spotify History",
          url: "https://en.wikipedia.org/wiki/Spotify"
        }
      ]
    },
    {
      title: "The Creation of GitHub",
      content: "GitHub was launched in 2008, providing a platform for developers to collaborate on code and manage software projects using Git.",
      links: [
        {
          text: "GitHub Overview",
          url: "https://en.wikipedia.org/wiki/GitHub"
        }
      ]
    },
    {
      title: "The Evolution of the Computer Mouse",
      content: "Invented in the 1960s by Douglas Engelbart, the computer mouse transformed how users interact with computers, leading to the development of graphical user interfaces.",
      links: [
        {
          text: "Computer Mouse History",
          url: "https://en.wikipedia.org/wiki/Mouse_(computing)"
        }
      ]
    },
    {
      title: "The Launch of the Google Chrome Browser",
      content: "Google Chrome was released in 2008, quickly becoming one of the most popular web browsers due to its speed, simplicity, and security features.",
      links: [
        {
          text: "Google Chrome Overview",
          url: "https://en.wikipedia.org/wiki/Google_Chrome"
        }
      ]
    },
    {
      title: "The Introduction of Docker",
      content: "Docker was launched in 2013, introducing containerization technology that allows developers to package applications and their dependencies into containers.",
      links: [
        {
          text: "Docker Overview",
          url: "https://www.docker.com/what-docker"
        }
      ]
    },
    {
      title: "The Launch of the Nintendo Switch",
      content: "The Nintendo Switch was released in 2017, combining handheld and home console gaming, and became a major success for the company.",
      links: [
        {
          text: "Nintendo Switch Overview",
          url: "https://en.wikipedia.org/wiki/Nintendo_Switch"
        }
      ]
    },
    {
      title: "The Development of Quantum Computing",
      content: "Quantum computing has gained momentum in recent years, with companies like IBM and Google exploring its potential to solve complex problems beyond classical computing capabilities.",
      links: [
        {
          text: "Quantum Computing Overview",
          url: "https://en.wikipedia.org/wiki/Quantum_computing"
        }
      ]
    },
    {
      title: "The Rise of Smart Home Devices",
      content: "Smart home technology, including devices like Amazon Echo and Google Home, has transformed how people interact with their homes and manage daily tasks.",
      links: [
        {
          text: "Smart Home Technology Overview",
          url: "https://en.wikipedia.org/wiki/Smart_home"
        }
      ]
    },
    {
      title: "The Launch of the Raspberry Pi Foundation",
      content: "The Raspberry Pi Foundation was established in 2009 to promote the study of basic computer science in schools, leading to the creation of the Raspberry Pi computer.",
      links: [
        {
          text: "Raspberry Pi Foundation Overview",
          url: "https://www.raspberrypi.org/"
        }
      ]
    },
    {
      title: "The Introduction of 3D Printing",
      content: "3D printing technology became accessible to consumers in the 2010s, enabling users to create physical objects from digital designs.",
      links: [
        {
          text: "3D Printing Overview",
          url: "https://en.wikipedia.org/wiki/3D_printing"
        }
      ]
    },
    {
      title: "The Launch of TikTok",
      content: "TikTok was launched internationally in 2017, allowing users to create and share short videos and rapidly gaining a massive user base.",
      links: [
        {
          text: "TikTok Overview",
          url: "https://en.wikipedia.org/wiki/TikTok"
        }
      ]
    }
  ];
  
  // Challenges
  const challenges = [
    {
      title: "Unit Conversion Safety",
      difficulty: "Medium",
      content: "Create a robust unit conversion system that prevents Mars Climate Orbiter-style disasters. Implement type-safe conversions between metric and imperial units with clear error handling.",
      links: [
        {
          text: "NASA's Measurement Standards",
          url: "https://standards.nasa.gov/nasa-technical-standards"
        },
        {
          text: "SI Unit Conversion Guide",
          url: "https://www.nist.gov/pml/weights-and-measures/publications/metric-publications"
        }
      ]
    },
    {
      title: "Timestamp Overflow Prevention",
      difficulty: "Hard",
      content: "Build a system to detect and prevent Unix timestamp overflows. Handle dates beyond 2038 safely in a 32-bit system. Consider backward compatibility.",
      links: [
        {
          text: "Time_t Documentation",
          url: "https://en.cppreference.com/w/c/chrono/time_t"
        }
      ]
    },
    {
      title: "Version Control Implementation",
      difficulty: "Expert",
      content: "Implement a basic version control system that handles file changes, commits, and branching. Focus on the core concepts that made Git revolutionary.",
      links: [
        {
          text: "Git Internals Documentation",
          url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain"
        }
      ]
    },
    {
      title: "Safe Type System",
      difficulty: "Medium",
      content: "Design a type system that prevents common unit conversion errors. Include runtime checks and compile-time safeguards.",
      links: [
        {
          text: "Type System Design Principles",
          url: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html"
        }
      ]
    },
    {
      title: "Fault Tolerant Web Service",
      difficulty: "Hard",
      content: "Create a web service that remains operational even when some components fail. Implement circuit breakers, fallbacks, and graceful degradation.",
      links: [
        {
          text: "AWS Architecture Guide",
          url: "https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/aws-fault-isolation-boundaries.html"
        }
      ]
    },
    {
      title: "Memory-Efficient String Storage",
      difficulty: "Medium",
      content: "Implement a memory-efficient string storage system similar to Python's string interning. Focus on reducing memory usage while maintaining performance.",
      links: [
        {
          text: "Python String Internals",
          url: "https://docs.python.org/3/c-api/string.html"
        }
      ]
    },
    {
      title: "Build a Shell",
      difficulty: "Expert",
      content: "Create a basic shell that can handle pipes, redirections, and background processes. Similar to how Linux shell development started.",
      links: [
        {
          text: "Linux Shell Programming Guide",
          url: "https://tldp.org/LDP/abs/html/"
        }
      ]
    },
    {
      title: "Secure SSL Implementation",
      difficulty: "Hard",
      content: "Create a secure implementation of SSL/TLS that protects against vulnerabilities like Heartbleed. Focus on proper certificate validation and secure data transmission.",
      links: [
        {
          text: "SSL/TLS Best Practices",
          url: "https://www.ssllabs.com/projects/best-practices/index.html"
        }
      ]
    },
    {
      title: "Unit Testing for Critical Systems",
      difficulty: "Medium",
      content: "Develop a unit testing framework for critical systems that ensures high reliability. Include features for mocking dependencies and running tests in parallel.",
      links: [
        {
          text: "Unit Testing Best Practices",
          url: "https://martinfowler.com/articles/richardsonMaturityModel.html"
        }
      ]
    },
    {
      title: "Develop a Chat Application",
      difficulty: "Medium",
      content: "Create a real-time chat application using WebSocket technology. Implement user authentication and message persistence.",
      links: [
        {
          text: "WebSocket Documentation",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
        }
      ]
    },
    {
      title: "Build a Basic Website",
      difficulty: "Easy",
      content: "Create a static website using HTML, CSS, and JavaScript that showcases your portfolio or a personal blog.",
      links: [
        {
          text: "HTML/CSS Tutorial",
          url: "https://www.w3schools.com/"
        }
      ]
    },
    {
      title: "Create a Simple Game",
      difficulty: "Medium",
      content: "Develop a simple 2D game using a game engine like Unity or Godot. Focus on basic game mechanics and user interaction.",
      links: [
        {
          text: "Unity Getting Started",
          url: "https://unity.com/learn/tutorials"
        },
        {
          text: "Godot Documentation",
          url: "https://docs.godotengine.org/en/stable/"
        }
      ]
    },
    {
      title: "Design a RESTful API",
      difficulty: "Medium",
      content: "Create a RESTful API using a framework of your choice (e.g., Express, Flask) to manage a simple resource like tasks or notes.",
      links: [
        {
          text: "REST API Tutorial",
          url: "https://restfulapi.net/"
        }
      ]
    },
    {
      title: "Build a Personal Finance Tracker",
      difficulty: "Hard",
      content: "Create a web application that allows users to track their personal finances, including income, expenses, and budgeting.",
      links: [
        {
          text: "Web Application Development Guide",
          url: "https://www.freecodecamp.org/news/build-a-web-application-with-flask-and-python/"
        }
      ]
    },
    {
      title: "Develop a Mobile App",
      difficulty: "Hard",
      content: "Create a mobile application for iOS or Android that solves a specific problem or enhances productivity.",
      links: [
        {
          text: "React Native Documentation",
          url: "https://reactnative.dev/docs/getting-started"
        }
      ]
    },
    {
      title: "Implement Machine Learning Model",
      difficulty: "Expert",
      content: "Build and train a machine learning model to solve a specific problem using a framework like TensorFlow or PyTorch.",
      links: [
        {
          text: "TensorFlow Documentation",
          url: "https://www.tensorflow.org/tutorials"
        },
        {
          text: "PyTorch Documentation",
          url: "https://pytorch.org/tutorials/"
        }
      ]
    },
    {
      title: "Create a Blog Platform",
      difficulty: "Hard",
      content: "Develop a blogging platform that allows users to create, edit, and delete blog posts. Implement user authentication and comment functionality.",
      links: [
        {
          text: "Django Blog Tutorial",
          url: "https://www.djangoproject.com/start/overview/"
        }
      ]
    },
    {
      title: "Build a Weather App",
      difficulty: "Medium",
      content: "Create a web application that fetches and displays weather data from a public API based on user input.",
      links: [
        {
          text: "OpenWeatherMap API",
          url: "https://openweathermap.org/api"
        }
      ]
    },
    {
      title: "Implement a Search Engine",
      difficulty: "Hard",
      content: "Build a simple search engine that indexes a set of documents and allows users to perform keyword searches.",
      links: [
        {
          text: "Search Engine Development Guide",
          url: "https://www.semrush.com/blog/how-to-build-a-search-engine/"
        }
      ]
    },
  {
    title: "Implement Image Compression Algorithm",
    difficulty: "Hard",
    content: "Design an image compression algorithm that minimizes file size while maintaining acceptable quality. Compare it with existing algorithms like JPEG.",
    links: [
      {
        text: "Image Compression Guide",
        url: "https://www.cs.usfca.edu/~galles/cs682.s08/lectures/lecture8.pdf"
      }
    ]
  },
  {
    title: "Develop a Text Editor",
    difficulty: "Hard",
    content: "Build a text editor with basic features like syntax highlighting, line numbering, and file saving/loading.",
    links: [
      {
        text: "Text Editor Implementation",
        url: "https://viewsourcecode.org/snaptoken/kilo/"
      }
    ]
  },
  {
    title: "Create a URL Shortener",
    difficulty: "Medium",
    content: "Develop a service that shortens long URLs and expands short URLs back to the original. Include analytics for URL usage.",
    links: [
      {
        text: "URL Shortener Design",
        url: "https://www.geeksforgeeks.org/design-a-url-shortener/"
      }
    ]
  },
  {
    title: "Implement a Blockchain",
    difficulty: "Expert",
    content: "Create a basic blockchain system with features like adding blocks, validating chains, and proof-of-work consensus.",
    links: [
      {
        text: "Blockchain Basics",
        url: "https://developer.ibm.com/series/blockchain-for-developers/"
      }
    ]
  },
  {
    title: "Build an E-commerce Platform",
    difficulty: "Hard",
    content: "Develop an e-commerce website with product listings, shopping cart functionality, and payment gateway integration.",
    links: [
      {
        text: "E-commerce Guide",
        url: "https://www.shopify.com/guides"
      }
    ]
  },
  {
    title: "Create an AI Chatbot",
    difficulty: "Expert",
    content: "Build an AI-powered chatbot using machine learning or rule-based techniques. Include NLP features and context management.",
    links: [
      {
        text: "Chatbot Design",
        url: "https://www.udemy.com/course/chatbot-with-nlp-ml-python/"
      }
    ]
  },
  {
    title: "Build a Multiplayer Game",
    difficulty: "Expert",
    content: "Develop a multiplayer game with real-time interaction using technologies like WebRTC or game networking libraries.",
    links: [
      {
        text: "Game Networking Guide",
        url: "https://gafferongames.com/"
      }
    ]
  },
  {
    title: "Design a Custom Database",
    difficulty: "Expert",
    content: "Implement a custom database engine supporting basic CRUD operations and indexing for efficient query execution.",
    links: [
      {
        text: "Database System Design",
        url: "https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf"
      }
    ]
  },
  {
    title: "Create a Quiz App",
    difficulty: "Easy",
    content: "Develop a simple quiz application where users can answer questions and view their scores at the end.",
    links: [
      {
        text: "Quiz App Guide",
        url: "https://www.codecademy.com/projects/quiz-app"
      }
    ]
  },
  {
    title: "Build a Custom Game Engine",
    difficulty: "Expert",
    content: "Develop a custom game engine to support basic 2D rendering, physics, and input handling.",
    links: [
      {
        text: "Game Engine Development",
        url: "https://gameprogrammingpatterns.com/"
      }
    ]
  },
  {
    title: "Implement a Genetic Algorithm",
    difficulty: "Hard",
    content: "Design a genetic algorithm to solve optimization problems like the traveling salesman problem.",
    links: [
      {
        text: "Genetic Algorithm Basics",
        url: "https://towardsdatascience.com/genetic-algorithms-explained-41a30a297e5d"
      }
    ]
  },
  {
    title: "Create a Task Automation Tool",
    difficulty: "Medium",
    content: "Develop a tool to automate repetitive tasks, such as file organization or data processing.",
    links: [
      {
        text: "Task Automation in Python",
        url: "https://realpython.com/automation-with-python/"
      }
    ]
  },
  {
    title: "Build a Code Linter",
    difficulty: "Hard",
    content: "Create a code linter to identify and fix common programming errors and enforce coding standards.",
    links: [
      {
        text: "Build Your Own Linter",
        url: "https://eslint.org/docs/latest/developer-guide"
      }
    ]
  },
  {
    title: "Design a Sudoku Solver",
    difficulty: "Medium",
    content: "Develop a program to solve any given Sudoku puzzle using backtracking or constraint satisfaction.",
    links: [
      {
        text: "Sudoku Solver Tutorial",
        url: "https://www.geeksforgeeks.org/sudoku-backtracking-7/"
      }
    ]
  },
  {
    title: "Implement File Compression",
    difficulty: "Hard",
    content: "Create a file compression tool using algorithms like Huffman coding or Lempel-Ziv.",
    links: [
      {
        text: "File Compression Basics",
        url: "https://en.wikipedia.org/wiki/Huffman_coding"
      }
    ]
  },
  {
    title: "Develop an IoT Application",
    difficulty: "Hard",
    content: "Create an Internet of Things (IoT) application that monitors and controls devices remotely using MQTT.",
    links: [
      {
        text: "IoT Development Guide",
        url: "https://mqtt.org/"
      }
    ]
  },
  {
    title: "Build a Sentiment Analysis Tool",
    difficulty: "Medium",
    content: "Develop a sentiment analysis tool that classifies text as positive, negative, or neutral using machine learning.",
    links: [
      {
        text: "Sentiment Analysis Guide",
        url: "https://www.analyticsvidhya.com/blog/2021/06/step-by-step-guide-to-perform-sentiment-analysis/"
      }
    ]
  },
  {
    title: "Implement Speech Recognition",
    difficulty: "Expert",
    content: "Build a speech recognition system that converts spoken language into text using libraries like SpeechRecognition or Kaldi.",
    links: [
      {
        text: "Speech Recognition Guide",
        url: "https://pypi.org/project/SpeechRecognition/"
      }
    ]
  },
  {
    title: "Create a Task Scheduler",
    difficulty: "Hard",
    content: "Design a task scheduler that executes tasks at specific intervals, similar to cron jobs.",
    links: [
      {
        text: "Task Scheduling Basics",
        url: "https://docs.python.org/3/library/sched.html"
      }
    ]
  }
];

  // Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle stories and challenges
const shuffledStories = shuffleArray([...stories]);
const shuffledChallenges = shuffleArray([...challenges]);

let currentStoryIndex = 0;
let currentChallengeIndex = 0;

// Story Navigation
function showStory(index) {
  const story = shuffledStories[index];
  document.getElementById('story-title').textContent = story.title;
  document.getElementById('story-content').textContent = story.content;

  const linksContainer = document.getElementById('story-links');
  linksContainer.innerHTML = story.links.map(link => 
    `<a href="${link.url}" target="_blank" class="resource-link">${link.text}</a>`
  ).join('');
}

// Challenge Navigation
function showChallenge(index) {
  const challenge = shuffledChallenges[index];
  document.getElementById('challenge-title').textContent = challenge.title;
  document.getElementById('challenge-content').textContent = challenge.content;
  document.querySelector('.difficulty').textContent = `Difficulty: ${challenge.difficulty}`;

  const linksContainer = document.getElementById('challenge-links');
  linksContainer.innerHTML = challenge.links.map(link => 
    `<a href="${link.url}" target="_blank" class="resource-link">${link.text}</a>`
  ).join('');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  showStory(currentStoryIndex);
  showChallenge(currentChallengeIndex);

  // Tab Navigation
  document.getElementById('view-stories').addEventListener('click', () => {
    document.getElementById('stories-container').classList.add('active');
    document.getElementById('challenges-container').classList.remove('active');
    document.getElementById('view-stories').classList.add('active');
    document.getElementById('view-challenges').classList.remove('active');
  });

  document.getElementById('view-challenges').addEventListener('click', () => {
    document.getElementById('challenges-container').classList.add('active');
    document.getElementById('stories-container').classList.remove('active');
    document.getElementById('view-challenges').classList.add('active');
    document.getElementById('view-stories').classList.remove('active');
  });

  // Story Navigation
  document.getElementById('next-story').addEventListener('click', () => {
    currentStoryIndex = (currentStoryIndex + 1) % shuffledStories.length;
    showStory(currentStoryIndex);
  });

  document.getElementById('prev-story').addEventListener('click', () => {
    currentStoryIndex = (currentStoryIndex - 1 + shuffledStories.length) % shuffledStories.length;
    showStory(currentStoryIndex);
  });

  // Challenge Navigation
  document.getElementById('next-challenge').addEventListener('click', () => {
    currentChallengeIndex = (currentChallengeIndex + 1) % shuffledChallenges.length;
    showChallenge(currentChallengeIndex);
  });

  document.getElementById('prev-challenge').addEventListener('click', () => {
    currentChallengeIndex = (currentChallengeIndex - 1 + shuffledChallenges.length) % shuffledChallenges.length;
    showChallenge(currentChallengeIndex);
  });
});
