
const reelsData = [
  {
    id: 1,
    username: "umros11",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    video: "./videos/1.mp4",
    caption: "Early morning walks hit different 🌅",
    likeCount: 1240,
    commentCount: 48,
    shareCount: 19,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 2,
    username: "travel_with_sara",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    video: "./videos/2.mp4",
    caption: "Mountains > everything else ⛰️",
    likeCount: 8960,
    commentCount: 214,
    shareCount: 97,
    isLiked: true,
    isFollowed: true
  },
  {
    id: 3,
    username: "code.daily",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    video: "./videos/3.mp4",
    caption: "Debugging at 2 AM 💻☕",
    likeCount: 3420,
    commentCount: 131,
    shareCount: 56,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 4,
    username: "street_food_diaries",
    userProfile: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200",
    video: "./videos/4.mp4",
    caption: "This chaat is worth the wait 😋",
    likeCount: 15480,
    commentCount: 652,
    shareCount: 312,
    isLiked: true,
    isFollowed: false
  },
  {
    id: 5,
    username: "fit_life_raj",
    userProfile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200",
    video: "./videos/2.mp4",
    caption: "Consistency beats motivation 💪",
    likeCount: 4180,
    commentCount: 102,
    shareCount: 41,
    isLiked: false,
    isFollowed: true
  },
  {
    id: 6,
    username: "music_vibes",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
    video: "./videos/1.mp4",
    caption: "Volume up, world off 🎧",
    likeCount: 9870,
    commentCount: 368,
    shareCount: 146,
    isLiked: true,
    isFollowed: true
  },
  {
    id: 7,
    username: "city_lens",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    video: "./videos/3.mp4",
    caption: "City nights and neon lights 🌃",
    likeCount: 2790,
    commentCount: 91,
    shareCount: 34,
    isLiked: false,
    isFollowed: false
  },
  {
    id: 8,
    username: "nature_frame",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    video: "./videos/4.mp4",
    caption: "Green therapy 🌿",
    likeCount: 11420,
    commentCount: 432,
    shareCount: 183,
    isLiked: true,
    isFollowed: false
  },
  {
    id: 9,
    username: "art_studio",
    userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
    video: "./videos/1.mp4",
    caption: "Art doesn’t need permission 🎨",
    likeCount: 2040,
    commentCount: 64,
    shareCount: 23,
    isLiked: false,
    isFollowed: true
  },
  {
    id: 10,
    username: "daily_push",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    video: "./videos/2.mp4",
    caption: "Small steps every day 🚀",
    likeCount: 22310,
    commentCount: 998,
    shareCount: 462,
    isLiked: true,
    isFollowed: true
  }
];

var sum="";
reelsData.forEach(function(elem){
    sum= sum + ` <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="user">
                            <h4>${elem.username}</h4>
                            <button>Follow</button>
                        </div> 
                          <h3>${elem.caption}</h3>
                     </div>
                     <div class="right">
                         <div class="like">
                            <h4 class="like-icon"><i class="ri-heart-3-line"></i></h4>
                            <h6>${elem.likeCount}</h6>
                         </div>
                         <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                         </div>
                         <div class="share">
                            <h4 class="share-icon"><i class="ri-send-ins-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                         </div>
                         <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                           
                         </div>
                     </div>
                </div>`
    
})
console.log(sum);

var allReels = document.querySelector(".allreels")
allReels.innerHTML=sum;