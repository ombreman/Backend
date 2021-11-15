# 🎙 Talk'Bout
The Final Project of Hanghae 99 Coding Bootcamp!
Community type web service for people who want to talk about coding bootcamps in the market.

# Back-end


![Img](https://github.com/skylermbang/Backend/blob/main/img/talkboot_insta_1200x628_2.jpg)


<!--
## Content
1. [Introduction](#토크부트-소개)
2. [Outline](#개요)
3. [개발환경](#기능정보)
4. [기능정보](#기능정보)
5. [DB 설계](#DB-설계) 
6. [API 설계](#API-설계)
7. [힘들었던 점 및 개선](#힘들었던-점-및-개선)
8. [상세 설명 페이지](#상세-설명-페이지)
-->

## 🖥 Address
- [https://talkbout.camp](https://talkbout.camp)

## 👾 Introduction of Our Service
- Reviews from actual bootcamp users and people who finished
- Find a bootcamp you fit the most in one web site
- You can ask questions you wonder about bootcamps in the market

## 📌 Outline 
- Project Title: talk'Bout
- Period: 2021.07.25 ~ 2021.09.03
- Team
  - Front-end(React): 이동민
  - Back-end(Node.js): Changgil Jeong (Team Leader), 송하영 ,방민수
  - Designer(UI/UX): 윤영미, 양서문

## 🛠Architecture 
![img](https://github.com/skylermbang/Backend/blob/main/img/architecture.png)
- REST API: AWS EC2(Ubuntu 18.04 LTS)
- Framework: Express(TypeScript)
- ORM : Prisma 
- Database: Amazon RDS (MySQL)
- Image Storage : AWS S3

## 📚 Main Libraries
axios, class-validator, passport, multer,  dotenv, helmet, cors, sharp

## ✨ Main Functions
#### 1. Log in
- Google, Kakao social log in system were used
- Refresh and Access token were used

#### 2. Bootcamp Reviews
- Information of 11 bootcamps in the market and reviews
- Add bookmarks of bootcamps
- Give marks with stars and leave reviews on bootcamps

#### 3. Bulletin Board
- Post with any subject and images
- Sorting post by views and popularity
- Uploaded images are automatically compressed and saved
- Bookmark posts
- Comment and Like function

#### 4. Question Board
- Leaving comments and answers
- Hitting like button user's preferred questions and answers
- Answers cannot be editted or deleted to make users leave answer for questions carefully

#### 5. My Page
- Users can change their nickname and profile picture
- Bookmark questions and posts can be checked
- Users can check what they have wrote on a list


## 🔨 Major Upgrades
- Code convention was conducted to be seem like one person writes whole code
- Served images faster to users by saving compressed and original image files with Sharp library
- Simple algorithm was executed to prevent troll users
- Reduced server load by separating Amazon RDS and S3 for image storage from our initial server


## Main APIs
- API Documentation : <🛠>

## Initial Project Plan Notion Page
- https://www.notion.so/Talk-Bout-_-_5-90d8e8f4f3904dfb84b3892b94daa7d0

## Front-End(React) Repository
- https://github.com/Talk-Bout/Frontend
