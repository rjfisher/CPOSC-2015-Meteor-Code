if(Sessions.find({}).count() === 0) {
  console.log("Adding session data...");

  var id = Sessions.insert({
    time: '8:00am - 9:00am',
    location: 'IU 13 Conference Center',
    title: 'Registration/Breakfast',
    desc: 'Check-in at the entrance, pick up your badge and enjoy some light breakfast items with your peers.',
    speaker: null,
    speakerimg: null
  });

  var id = Sessions.insert({
    time: '9:00am - 9:10am',
    location: '106C',
    title: 'Opening',
    desc: 'Opening remarks from the organizers.',
    speaker: null,
    speakerimg: null
  });

  var id = Sessions.insert({
    time: '9:15am - 9:45am',
    location: '106B',
    title: 'SeverSpec: Unit Testing for Servers and Containers',
    desc: 'Serverspec is an open source ruby project that uses Rspec for performing unit testing against servers and configuration files. What I will be demonstrating is writing basic unit tests, deploying them against virtual servers/containers, and building reports based on the results. Little to no ruby experience is required.',
    speaker: 'Jason O\'Donnell',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/jason_od-150x150.png'
  });

  var id = Sessions.insert({
    time: '9:15am - 9:45am',
    location: '106C',
    title: 'Why Aren\t Schools Using Open Source Software',
    desc: 'Free and open source software can unleash tremendous student learning experiences, and save schools money. So why aren’t more K-12 schools getting onboard? Let’s examine open source school software criticisms, debunk common myths, and review strategies for extending open source into the classroom. Schools belong to the community; as a community, let’s discuss how we can help make education more open.',
    speaker: 'Charlie Reisinger',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/Charlie-Twitter2-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '9:15am - 9:45am',
    location: '106A',
    title: 'You Don\'t Know Node.JS',
    desc: 'This talk will give a sneak peak of the most interesting and powerful Node.js features. Node.js is quickly capturing the programming world not just in web, but in IoT, drones, robots and embedded systems.\n\nThis talk dives deep into the core mechanisms of the Node.js platform and some of its most interesting features',
    speaker: 'Azat Mardan',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/azat-150x150.jpeg'
  });

  var id = Sessions.insert({
    time: '10:10am - 10:40am',
    location: '106C',
    title: 'OMG How Do I Start An Open Source Project?',
    desc: 'You know how to code, how to contribute at work. You may have experience contributing to an open source project, where things are a bit, shall we say, “different”. But how in the world do you get an open source project off the ground? Where do you even start? Write code and push it to Github? Is that it? Short answer: No. While pushing code to Github may be all that’s technically needed, there are some social conventions, tools, formats and other issues you’ll need to conquer if you want your open source project to really soar. I know, because I went through that pain recently. Join me as I recount the steps, mistakes, re-do’s and learning necessary to get PoshStack (an open source PowerShell module) started as a viable open source project. If you have an idea for an open source project, but don’t know how or where to start, you don’t want to miss this session.',
    speaker: 'Don Schenck',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/DonSchenckProfilePic-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '10:10am - 10:40am',
    location: '106A',
    title: 'Native iOS and Android Development with Go',
    desc: 'We will go through a brief history of the native development (iOS and Android) ecosystems and options for cross-platform development. Then a very brief explanation of Go and specifically how Go works great on ARM architectures where resources constraints are more stringent.\n\nThen an exploration of Go’s mobile APIs, and a walkthrough or a real native cross-platform application.',
    speaker: 'Steve High',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/steve_high-150x150.png'
  });

  var id = Sessions.insert({
    time: '10:10am - 10:40am',
    location: '106B',
    title: 'Crypto Pitfalls',
    desc: 'Code walk-through of how easy it is to fall into major cryptographic vulnerabilities such as Padding Oracle attack, even when using the latest algorithms/standards.\n\nCode samples will be in C# but the concepts apply to all languages.',
    speaker: 'Steve Patches',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/stevep_headshot-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '11:05am - 11:35am',
    location: '106B',
    title: 'ES2015: Not Your Grandpa\'s JavaScript',
    desc: 'A high level look at the most popular features of the newest version of JavaScript, officially named ECMAScript 2015 and previously referred to as ES6.\n\nFor years we’ve been hearing about all of the cool features that might be coming to JavaScript, and now the wait is over. The newest JavaScript standard has been completed, and implementation of the spec on the server and in browsers is well underway.\n\nToday’s JavaScript looks much different than what we’re all used to seeing, and it’s going to continue its rapid evolution as there is a new commitment to improve upon the standard every year.',
    speaker: 'Court Ewing',
    speakerimg: ''
  });

  var id = Sessions.insert({
    time: '11:05am - 11:35am',
    location: '106A',
    title: 'Linux and Docker on Azure, iOS, and Android on Visual Studio',
    desc: 'We’ll take a brief peek at Microsoft’s world class development tool – Visual Studio – a free, fully-featured, and extensible IDE for creating modern applications for Windows, Android, and iOS, as well as web applications and cloud services. We’ll also take a quick look at Azure, Microsoft’s cloud computing platform , a growing collection of integrated services—analytics, computing, database, mobile, networking, storage, and web—for moving faster, achieving more, and saving money.',
    speaker: 'James Tramel',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/james-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '11:05am - 11:35am',
    location: '106C',
    title: 'How to Automate Your Database w/o Ruining Everything Forever',
    desc: 'After a certain level of scaling, automating postgres is inevitable. In my experience, I’ve seen that the approach most clients take to automate postgres administration is at best, short-sighted. Only the commonly required tasks are kept in mind while designing postgres-related recipes, which leads to a lot of constraints, bugs and risks when major (and infrequent) tasks need to be performed.',
    speaker: 'Payal Singh',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/payal-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '11:35am - 12:35pm',
    location: 'IU13 Conference Center',
    title: 'Lunch',
    desc: 'We eat the noms',
    speaker: null,
    speakerimg: null
  });

  var id = Sessions.insert({
    time: '12:30pm - 1:10pm',
    location: '106C',
    title: 'Lightning Talks',
    desc: 'These Lightning Talks may be seri­ous, funny, or both. They may be given by ex­perien­ced speak­ers al­ready giv­ing full length talks or by first time speak­ers just start­ing out (this is a great way to get star­ted if you have some­th­ing to say). If you are a first time speak­er you will win a tie with an ex­peri­ence speak­er when the schedule is made if it comes to it. Today’s first time speak­er could give tomor­row’s keynote.\n\nWe will have about 5 Lig­htn­ing Talks of 5 minutes. Sub­mit your talk through the sub­mit talk link on this web­site. The first de­ad­line is one week be­fore the conference starts and many proposals will be accepted. At least one speak­ing spot will be held open until the morning of the talks to give you a chan­ce to see some­th­ing at the con­fer­ence and put togeth­er a Lig­htn­ing Talk re­spon­se. Howev­er if you wait for the later de­ad­lines note that there are fewer spots avail­able and you are less li­ke­ly to be ac­cepted so please try to sub­mit more than a week be­fore the con­fer­ence.\n\nIn ad­di­tion to the five minute Lig­htn­ing Talks where you get to use your com­put­er, slides, and any other tool, we will also have some Lig­htn­ing Ad­vertise­ments. These are only 30 seconds, you don’t have to sub­mit a pro­pos­al, you don’t get any slides, and the only AV as­sis­tance of­fered is a micro­phone. If you have a BOF to an­noun­ce, an auc­tion item so ad­vert­ise or any other short mes­sage you can use the trans­i­tion time that would be ot­herw­ise was­ted bet­ween Lig­htn­ing Talks to share your mes­sage. Just show up be­fore we start and take a seat in the as­sig­ned seats in the front of the room.\n\nWhy Would You Want to do a Lig­htn­ing Talk? Maybe you’ve never given a talk be­fore, and you’d like to start small. For a Lig­htn­ing Talk, you don’t need to make slides, and if you do de­cide to make slides, you only need to make three. Maybe you’re nerv­ous and you’re af­raid you’ll mess up. It’s a lot eas­i­er to plan and de­liv­er a five minute talk than it is to de­liv­er a long talk. And if you do mess up, at least the pain­ful part will be over quick­ly. Maybe you don’t have much to say. Maybe you just want to ask a ques­tion, or in­vite peo­ple to help you with your pro­ject, or boast about some­th­ing you did, or tell a short cautiona­ry story. These th­ings are all in­terest­ing and worth talk­ing about, but there might not be en­ough to say about them to fill up thir­ty minutes. Maybe you have a lot of th­ings to say, and you’re al­ready going to give a long talk on one of them, and you don’t want to hog the spot­light. There’s noth­ing wrong with giv­ing sever­al Lig­htn­ing Talks. Hey, they’re only five minutes. On the other side, peo­ple might want to come to a lig­htn­ing talk when they would­n’t come to a long talk on the same sub­ject. The risk for the at­tendees is small­er: If the talk turns out to be dull, or if the per­son giv­ing the talk turns out to be a rea­l­ly bad speak­er, well, at least it’s over in five minutes. With lig­htn­ing talks, you’re never stuck in some bor­ing lec­ture for forty-five minutes.',
    speaker: null,
    speakerimg: null
  });

  var id = Sessions.insert({
    time: '1:15pm - 1:45pm',
    location: '106B',
    title: 'Urban Legends: What You Code Makes You Who You Are',
    desc: 'If you were a carpenter, would your skills at building be more important than the tools you use to build? Skills, right? Tools are just a means to an end. So why do developers think the language they use defines the problems they solve?\n\nThis talk will take a look at misconceptions across the board, some experiences, both positive and negative, people have had crossing barriers to new languages, and show some of the benefits thinking of one’s self as a coder and not a “Ruby coder” or a “PHP dev” can have on being a better problem solver.',
    speaker: 'PJ Hagerty',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/pj_headshot-150x150.png'
  });

  var id = Sessions.insert({
    time: '1:15pm - 1:45pm',
    location: '106C',
    title: 'Quaver, the Analog Looping Piano',
    desc: 'Quaver is an antique piano turned song writing machine powered by magnetic pickups and a raspberry pi. The presentation includes a short demo of the piano, a tech breakdown of all open source components used, some common pitfalls involving Linux audio and ultra-performance tweaking for embedded devices running Linux.',
    speaker: 'Michael Bridgman',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/founders-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '1:15pm - 1:45pm',
    location: '106A',
    title: 'Intro to CSS Preprocessors',
    desc: 'Brief discussion of the faults of vanilla CSS and the benefits of a CSS preprocessor. Then an overview of some of the common features with code examples using the SCSS syntax. Followed by some next steps including a taste of advanced features, how to fit them into your workflow, and the future of preprocessors.',
    speaker: 'Zach Fedor',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/ZachFedor-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '2:10pm - 2:40pm',
    location: '106C',
    title: 'Introduction to OpenRefine',
    desc: 'Data is a hot topic in the tech sector with big data, data processing, data science, linked open data and data visualization to name only a few examples. Before data can be processed or analyzed it often has to be cleaned. OpenRefine is an open source interactive data transformation tool for working with messy data. This presentation will begin with a short overview of the features of OpenRefine. To demonstrate basic concepts of data cleaning, manipulating, faceting and filtering with OpenRefine, Pennsylvania Heritage magazine subject index data will be used as a case study.',
    speaker: 'Heather Myers',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/heather-profile-photo-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '2:10pm - 2:40pm',
    location: '106A',
    title: 'Android Development in an Imperfect World',
    desc: 'There’s a ton of resources online about properly writing Android applications from the ground up. Those are a fantastic place to start, but what do you do when you’re asked to maintain a legacy application that was written by fired people? It’s your job to bring order to chaos.\n\nThis talk is about what happens when you need to figure out what the the previous developer was thinking, fixing the design and coding mistakes you might encounter along the way, and what to do when someone asks you to fight the framework. It’s about integrating with an existing team and quickly ramping up to become productive. Tips, tricks, and philosophy will be provided.',
    speaker: 'Bob Igo',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/bobi_headshot-150x150.png'
  });

  var id = Sessions.insert({
    time: '2:10pm - 2:40pm',
    location: '106B',
    title: 'Goto: Meetups',
    desc: 'CPOSC is awesome, but what about the rest of the year? Meetups to the rescue!\n\nEver wondered what it takes to start a meetup? Curious about attending or organizing a tech meetup in Lancaster? We’re here to help! A panel of local tech meetup organizers will discuss a variety of topics including: starting a meetup, encouraging diversity, and resources for organizers and attendees.',
    speaker: null,
    speakerimg: null
  });

  var id = Sessions.insert({
    time: '3:05pm - 3:35pm',
    location: '106C',
    title: 'Everything You Never Knew You Wanted to Ask About Time Series Data',
    desc: 'I do a lot of work with Graphite, enabling developers, system administrators, and data scientists to record, retrieve, and mutate their data. In my tenure as a metric wrangler, I notice a large discrepancy between people’s expectations and the reality of a time series store like Graphite. This talk is intended to lay down a few best practices and highlight assumptions that Graphite makes so that users can get more value from their metrics. We’ll also throw in a few cool data manipulation tricks to make your pretty graphs prettier (and more meaningful!)',
    speaker: 'Brad Lhotsky',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/Brad-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '3:05pm - 3:35pm',
    location: '106B',
    title: 'Open Source and the Department of Veterans Affairs',
    desc: 'When one thinks of the Federal Government one rarely thinks of Open Source Software.  Well the Department of Veterans Affairs is starting to change that mindset.  The Department of Veterans Affairs has more than 20 million primary customers and a $3.4B annual IT budget with 400,000 users and over 5,000 applications.  AND, they are one of the biggest Open Source shops in the world! \n\nThe VA is developing an entire suite of Healthcare applications using Open Source Software and the resulting applications are Open Source as well!  This talk will take a look at some of the applications and technologies the VA is using in the healthcare environment and how they are looking to expand their healthcare system through Open Source Software',
    speaker: 'Mike Barlow',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/MWB_Headshot2-2015-05-12-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '3:05pm - 3:35pm',
    location: '106A',
    title: 'The Arch Way: Simplicity is King',
    desc: 'For those who do not know Arch Linux, or where it fits into the ecosystem and their own use cases, this presentation and discussion will aim to explain the beauty of the distribution’s philosophy and implementation of its primary directive: K.I.S.S. This will be valuable to Linux users at all levels of experience.',
    speaker: 'Jason Plum',
    speakerimg: ''
  });

  var id = Sessions.insert({
    time: '4:00pm - 4:30pm',
    location: '106C',
    title: 'The Bare-Metal Hypervisor as a Platform for Innovation',
    desc: 'For many tasks, the choice between a Type 1 (bare metal) or Type 2 (hosted) hypervisor is a matter of performance or even personal taste. Some workloads work slightly better on a hypervisor which is hosted within an existing operating system, while some others work better on hypervisors which run directly on bare metal with no operating system host. And many, many other tasks run about the same on either one.\n\nHowever, there is a growing breed of solutions which specifically leverage the architecture of a bare metal hypervisor to address new concepts. These tasks range from embedded applications to new types of cloud-hosted software appliances. All leverage the lightweight nature and securability of a Type 1 hypervisor, and most are fostered by the Xen Project ecosystem.\n\nWe will review a number real efforts underway including:\n\n– Xen Automotive: the effort to craft an embedded automotive infotainment system\n– Realtime virtualization: work to facilitate applications which need realtime processing\n– ARM-based hypervisor: enabling a new breed of applications, from servers to cell phones, on the ARM architecture\n– MirageOS and other unikernel systems: creating highly-dense farms of ultra-small and secure cloud appliances',
    speaker: 'Russell Pavlicek',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/08/russell-headshot-jul2015-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '4:00pm - 4:30pm',
    location: '106B',
    title: 'Meteor: Full Stack JavaScript Development for Web/Mobile',
    desc: 'Meteor is an open-source, modular, real-time platform aimed at making web/mobile development as quick and easy as possible. Leveraging superior tooling and JavaScript on both the client and the server Meteor seeks to take you from concept to completion as quickly as possible with cross platform code that just works. Is Meteor a true JavaScript silver bullet?',
    speaker: 'Rob Fisher',
    speakerimg: 'http://cposc.org/wp-content/uploads/2015/09/rob_headshot-150x150.jpg'
  });

  var id = Sessions.insert({
    time: '5:30pm - ???',
    location: 'Tellus360',
    title: 'CPOSC Afterparty',
    desc: 'Know what’s great after a day of thinking and talking and sitting and listening?\n\nA cold beer!\n\nJoin us for the official CPOSC Afterparty immediately following the close of the conference. The party is sponsored by Industrial Resolution and will take place at Tellus360 in downtown Lancaster (directions below).\n\nThis will be a great time to unwind, continue the open source chatter with your fellow CPOSC-ers, or switch gears entirely to fantasy football, home gardening techniques or whatever else is on your mind. We’ll also have a chance to get an inside look at Pubforge, a new tech-working space (think coworking space, but tailored for devs!) that is in development on the 2nd floor of Tellus360.\n\nThere’s no real set agenda here, so feel free to stay as long as you’d like!',
    speaker: null,
    speakerimg: null
  });

  console.log("Finished making session data...");
}
