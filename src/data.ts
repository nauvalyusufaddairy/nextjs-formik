export const User: UserCollection = [
  {
    userId: "1",
    userName: "Nauval Yusuf Addairy",
    email: "nauvalyusufad@gmail.com",
    organization: {
      orgId: "cern",
      orgName: "AWS",
    },
    password: "password",
    userImage: "../../public/gj.png",
    userPost: [
      {
        blogId: "1",
        title: "Deploying Nextjs 13 in Dockerize AWS EC2 ",
        content: "some content from nauval",
        img: [
          {
            id: "1",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:572/0*3bFrxa6-q0mlbqgR",
          },
        ],
        time: "12/12/12",
      },
    ],
  },
  {
    userId: "2",
    userName: "Mark Zuckerberg",
    email: "mark@gmail.com",
    organization: {
      orgId: "meta",
      orgName: "meta",
    },
    password: "password",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUX6modHln15_9CTmo0qH-_vHq0vN7GTXB_31tN2NSGVsXPp_qSOHjlL_Lc4MeyhHVS4&usqp=CAU",
    userPost: [
      {
        blogId: "1",
        title: "Meta and The Rest of The World",
        content: "some content from mark",
        img: [
          {
            id: "1",
            imgUrl:
              "https://miro.medium.com/v2/resize:fill:160:107/1*r5coQ_IUZNe0yjOH7vq_6w.jpeg",
          },
        ],
        time: "13/3/13",
      },
    ],
  },
  {
    userId: "3",
    userName: "Elon Musk",
    email: "musk@gmail.com",
    organization: {
      orgId: "Tesla",
      orgName: "Tesla",
    },
    password: "password",
    userImage:
      "https://w0.peakpx.com/wallpaper/836/554/HD-wallpaper-elon-musk-2021-thumbnail.jpg",
    userPost: [
      {
        blogId: "1",
        title: "How Tesla Ruined Ford in Sales",
        content: "some content from elon",
        img: [
          {
            id: "1",
            imgUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNlUlm2Sx4z-HLxfNxp4V7_17ZNbdkw6pCQ&usqp=CAU",
          },
        ],
        time: "3/12/14",
      },
    ],
  },
  {
    userId: "4",
    userName: "Rhys Raumschaaf",
    email: "rhys@gmail.com",
    organization: {
      orgId: "Glory2",
      orgName: "Glory Byte",
    },
    password: "password",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOXLwHAMJDAuXNlN3SPJGfi1b2Ogd_S-cCA&usqp=CAU",
    userPost: [
      {
        blogId: "1",
        title: "This is Why Postpal Will Beat Medium in The Future",
        content: "some content from rhys",
        img: [
          {
            id: "1",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:572/1*MwgiIOoo9f-o1OTgvEBGsA.png",
          },
        ],
        time: "3/12/14",
      },
    ],
  },
  {
    userId: "5",
    userName: "Heinz Guderian",
    email: "heinz@gmail.com",
    organization: {
      orgId: "werhmarcht",
      orgName: "werhmarcht",
    },
    password: "password",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Uwr1SvPiFSUNcsPtu3LUVbG76r5TBxYl_x_XKpU7BDOSYG1QCc-xBJEyCVwveZG9y8w&usqp=CAU",
    userPost: [
      {
        blogId: "1",
        title: "A long Road To Conquest All The Western World",
        content: "some content from Heinz",
        img: [
          {
            id: "1",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:0/1*Y__fwlD8VOjrhsV7ADNOzw.png",
          },
        ],
        time: "3/12/14",
      },
    ],
  },
  {
    userId: "6",
    userName: "Joseph Stalin",
    email: "stalin@gmail.com",
    organization: {
      orgId: "red",
      orgName: "The Red Banned Corps",
    },
    password: "password",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxJSP-qyjjbDrBbCCfIpaikip8lXr1fvS0A&usqp=CAU",
    userPost: [
      {
        blogId: "1",
        title: "How to Prevent Genocid While You Have to",
        content: "some content from Stalin",
        img: [
          {
            id: "1",
            imgUrl:
              "https://miro.medium.com/v2/resize:fit:572/1*wHmRMm6XHD2vs_JRYbroYQ.png",
          },
        ],
        time: "3/12/14",
      },
    ],
  },
];

export const category: Category[] = [
  { category: "Science", color: "#EF4444" },
  { category: "Auto", color: "#34D399" },
  { category: "Programming", color: "text-red-500" },
  { category: "Computer Scince", color: "text-orange-500" },
  { category: "Software Development", color: "text-green-500" },
  { category: "Genetics", color: "bg-light-blue-500" },
  { category: "DevOps", color: "text-emerald-500" },
];
