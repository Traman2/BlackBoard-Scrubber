# BlackBoard Crawler
  
<br>

<p align="center">
 <img src="READMELanding.png"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/GPL--3.0-red?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</p>

<h6 align="center">
    <a href="https://elevaiteworkspace.com">Try Out ElevAIte</a>
    ·
    <a href="https://www.linkedin.com/in/tejas-raman-1a892b255/">LinkedIn</a>
    ·
    <a href="https://github.com/traman2/">Github</a>
</h6>

## 🚀 About

**BlackBoard Crawler** is a powerful Chrome extension designed to streamline your academic workflow. Part of the ElevAIte productivity suite, this open-source tool automates the tedious process of manually tracking assignments and classes from Blackboard.

### ✨ Key Features

- **Super Fast**: Instantly scrape all tasks and classes in seconds
- **Multiple Export Options**: Download data as CSV files or sync directly with ElevAIte portal
- **Calendar Integration**: Seamlessly sync assignments with Google Calendar
- **Automation Tools**: Powerful automation capabilities to speed up your scheduling workflows
- **Open Source**: Released under GNU GPL-3.0 License

Transform your academic management from manual drudgery to automated efficiency with BlackBoard Crawler. 

### 🛠️ Setup & Installation

#### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Chrome browser

#### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/traman2/BlackBoard-Crawler.git
   cd BlackBoard-Crawler
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Build the extension**
   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the `dist` folder
   - The BlackBoard Crawler extension should now appear in your extensions

5. **That's it!**

### 🖥️ Usage
Once the BlackBoard Crawler Extension is setup and working properly, click on the Scrape Data button and watch the extension work its magic and instantly render all the classes you're currently enrolled in this tear. 

## ❓ FAQ
**Q: Is this extension safe to use with my Blackboard account?**  
A: Yes! BlackBoard Crawler only reads publicly available information from your Blackboard dashboard. It doesn't store or transmit your login credentials as the scraping process occurs after you login.

**Q: Which universities/institutions are supported?**  
A: The extension works with any institution that uses the standard Blackboard Learn platform. If you encounter issues with your specific institution, please open an issue. Adjust the domain names in the background and content scripts from utdallas to your unviersity of choice. 

**Q: Can I export my data to other calendar apps?**  
A: Currently, the extension supports Google Calendar integration and CSV export. The CSV file can be imported into most calendar applications. The Google Calendar sync feature only works when using the ElevAIte portal

**Q: What data does the extension scrape?**  
A: The extension only scrapes course information, assignment details, and due dates from your Blackboard dashboard. Future plans are to also scrape the grades feature. If you'd like, you can fork this repository, add any features you like, and submit a pull request. 

**Q: I'm getting an error when trying to scrape data. What should I do?**  
A: Make sure you're logged into Blackboard. The service workers check the domain to see if you are on the elearning.[university].edu

**Q: Is this extension free to use?**  
A: Yes! BlackBoard Crawler is completely free and open-source under the GNU GPL-3.0 license.

**Q: How do I contribute to this project?**  
A: Contributions are welcomed! Please fork the repository, make your changes, and submit a pull request. Check the issues page for areas where help is needed.

## 📄 License
Copyright (C) 2025 Tejas Raman <br/>
This project is licensed under the GNU GPL Licence - check [LICENSE](LICENSE) for details.