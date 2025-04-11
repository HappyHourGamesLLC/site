  
  export interface NewsArticle {
    id: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    tags: string[];
    imageUrl: string;
    content: string;
  }
  

  // Define news articles
  export const newsArticles: NewsArticle[] = [
    {
      id: "website-launch",
      title: "Welcome to Our New Website - Early Version Launch",
      date: "April 10, 2025",
      readTime: "3 min read",
      excerpt: "We're excited to launch the early version of our new website. Here's what's coming in future updates.",
      tags: ["Announcement", "Website"],
      imageUrl: "/images/news/website-launch.jpg",
      content: `
##### Welcome to the newly launched Happy Hour Games website! We're thrilled to finally have a digital home where we can share our projects, philosophy, and connect with our community.

This is very much an early version of our site, and we wanted to be transparent about what's still in the works. Here's what you can expect in upcoming updates:



## Coming Soon (In Order)
- **Official Logo Reveal** - Our design team is putting the finishing touches on our official logo  
- **Community Features** - Improvements will be made to discord to further Community enagagement.
- **Development Blog** - Regular updates and behind-the-scenes content  
- **Team Profiles** - Get to know the individuals behind Happy Hour Games  
- **Expanded Game Showcases** - Detailed pages about our current projects with additional screenshots  


## Our No-Crunch Commitment

We're building this website sustainably using an iterative approach that maintains our work-life balance. This mirrors our game development philosophy - careful planning, realistic timelines, and quality-focused execution.   
 
     
## Stay Connected  


Follow us for updates:   
- Discord: [Join our server](https://discord.gg/KAmAc5SuZC)  

*The Happy Hour Games Team*
      `
    }
  ];

  export default newsArticles;