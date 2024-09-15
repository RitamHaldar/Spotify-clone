import React from 'react'

const Body = () => {
    return (
        <div className='body'>
            <div className='navbar'>
                <div className="arrow">
                    <button id='left'><i class="fa-solid fa-angle-left"></i></button>
                    <button id="right"><i class="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="buttonslog">
                    <button id='signup' className='signup'>Sign up</button>
                    <button id='login' className='login'>Log in</button>
                </div>
            </div>
            <div className="content">
                <div className="header">
                    <h2>Popular artists</h2>
                    <a href="" className='showall'>Show all</a>
                </div>
                <div className="contents">
                    <div className='cards'><img src="./artist1.jpeg" alt="" className='imagebadge artist' /><h4>Pritam</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className='cards'><img src="./artist2.jpg" alt="" className='imagebadge artist' /><h4>Arijit Singh</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className='cards'><img src="./artist3.jpg" alt="" className='imagebadge artist' /><h4>A.R Rahman</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className='cards'><img src="./artist4.jpg" alt="" className='imagebadge artist' /><h4>Sachin-Jigar</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className='cards'><img src="./artist5.jpg" alt="" className='imagebadge artist' /><h4>Anirudh...</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className='cards'><img src="./artist6.jpg" alt="" className='imagebadge artist' /><h4>Vishal Mishra</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className='cards'><img src="./artist7.jpg" alt="" className='imagebadge artist' /><h4>Atif Aslam</h4><h5><a>Artist</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                </div>
                <div className="header">
                    <h2>Popular albums</h2>
                    <a href="" className='showall'>Show all</a>
                </div>
                <div className="contents">
                    <div className="cards"><img src="./albums1.jpg" alt="" className='imagebadge' /><h4>Aashiqui 2</h4><h5><a href=''>Mithoon, Ankit Tiwari,Jeet Gannguli</a></h5><i class="fa-solid fa-circle-play" id='player'></i> </div>
                    <div className="cards"><img src="./albums2.jpg" alt="" className='imagebadge' /><h4>Ek Tha Raja</h4><h5><a href=''>Badshah</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./albums3.jpg" alt="" className='imagebadge' /><h4>ANIMAL</h4><h5><a href=''>Manan Bhardwaj, Vishal Mishra, Jaani</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./albums4.jpg" alt="" className='imagebadge' /><h4>Sajni (From "Laapa...</h4><h5><a href=''>Ram Sampath, Arijit Singh, Prashant Pandey</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./albums5.jpg" alt="" className='imagebadge' /><h4>Moosetape</h4><h5><a href=''>Sidhu Moose Wala</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./albums6.jpg" alt="" className='imagebadge' /><h4>Still Rollin</h4><h5><a href=''>Subh</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./albums7.jpg" alt="" className='imagebadge' /><h4>Making Memories</h4><h5><a href=''>Karan Aujla, Ikky</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                </div>
                <div className="header">
                    <h2>Popular radio</h2>
                    <a href="" className='showall'>Show all</a>
                </div>
                <div className="contents">
                    <div className="cards"><img src="./radio1.jpg" alt="" className='imagebadge' /><h4>Arijit Singh Radio </h4><h5><a href="">With Neha Kakkar, Pritam, KK and...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./radio2.jpg" alt="" className='imagebadge' /><h4>A.R. Rahman...</h4><h5><a href=""> With Sankar,Mahadevan...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./radio3.jpg" alt="" className='imagebadge' /><h4>Shreya Ghoshal...</h4><h5><a href="">With Sonu Nigam, Sunidhi Chauhan,.....</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./radio4.jpg" alt="" className='imagebadge' /><h4>Udit Narayan...</h4><h5><a href="">With Kumar Sanu, Alka Yagnik....</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./radio5.jpg" alt="" className='imagebadge' /><h4>Diljit Dosanjh...</h4><h5><a href="">With Garry Sandhu, Ranjit Bawa,....</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./radio6.jpg" alt="" className='imagebadge' /><h4>KK Radio</h4><h5><a href="">With Mohit Chauhan, Ankit...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./radio7.jpg" alt="" className='imagebadge' /><h4>G. V. Prakash...</h4><h5><a href="">With Hiphop Tamizha, Yuvan...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                </div>
                <div className="header">
                    <h2>Featured charts</h2>
                    <a className='showall' id='featuredcharts'>Show all</a>
                </div>
                <div className="contents">
                    <div className="cards"><img src="./chart1.jpg" alt="" className='imagebadge' /><h4>Top Songs -...</h4><h5><a href="">Your weekly update of the most playe...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./chart2.jpg" alt="" className='imagebadge' /><h4>Top Songs - USA</h4><h5><a href="">Your weekly update of the most playe...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./chart3.jpg" alt="" className='imagebadge' /><h4>Top 50 - Global</h4><h5><a href="">Your daily update of the most played...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./chart4.jpg" alt="" className='imagebadge' /><h4>Top 50 - USA</h4><h5><a href="">Your daily update of the most played...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./chart5.jpg" alt="" className='imagebadge' /><h4>Viral 50-Global</h4><h5><a href="">Your daily update of the most viral trac...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./chart6.jpg" alt="" className='imagebadge' /><h4>Viral 50 - USA</h4><h5><a href="">Your daily update of the most viral trac...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                </div>
                <div className="header">
                    <h2>Zzzzzzz</h2>
                    <a href="" className='showall'>Show all</a>
                </div>
                <div className="contents">
                    <div className='cards'><img src="./sleep1.jpg" alt="" className='imagebadge' /><h4>Deep Sleep</h4><h5><a href="">Soothing, minimalist ambien...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./sleep2.jpg" alt="" className='imagebadge' /><h4>Jazz for Sleep</h4><h5><a href="">Let these calm Jazz tracks lull you to...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./sleep3.jpg" alt="" className='imagebadge' /><h4>Dreamy Forest...</h4><h5><a href="">Wander into the magical mix of...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./sleep4.jpg" alt="" className='imagebadge' /><h4>lofi sleep</h4><h5><a href="">Instrumental beats for a restful night's...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./sleep5.jpg" alt="" className='imagebadge' /><h4>Night Rain</h4><h5><a href="">Sleep with sounds of pouring rain an....</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./sleep6.jpg" alt="" className='imagebadge' /><h4>White Noise 10...</h4><h5><a href="">Ten hours long continuous white....</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./sleep7.jpg" alt="" className='imagebadge' /><h4>Sleep</h4><h5><a href="">Gentle Ambient piano to help you...</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                </div>
                <div className="header">
                    <h2>Trending episodes</h2>
                    <a href="" className='showall'>Show all</a>
                </div>
                <div className="contents">
                    <div className='cards'><img src="./spotify1.jpg" alt="" className='imagebadge' /><h4>Welcome back,...</h4><h5><a href="">Jun 2021-15 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./spotify2.jpg" alt="" className='imagebadge' /><h4>#73: Hotel Of...</h4><h5><a href="">Jun 2021-93 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./spotify3.jpg" alt="" className='imagebadge' /><h4>Anubis: God of...</h4><h5><a href="">Jun 2021-16 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./spotify3.jpg" alt="" className='imagebadge' /><h4>Anubis: God of...</h4><h5><a href="">Jun 2021-13 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./spotify4.jpg" alt="" className='imagebadge' /><h4>Mahabharata...</h4><h5><a href="">Apr 2014 24 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./spotify5.jpg" alt="" className='imagebadge' /><h4>Relaxing Rain...</h4><h5><a href="">Aug 2019-122 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                    <div className="cards"><img src="./spotify6.jpg" alt="" className='imagebadge' /><h4>Ep 8 - Ye Na Thi...</h4><h5><a href="">Aug 2020. 3 min</a></h5><i class="fa-solid fa-circle-play" id='player'></i></div>
                </div>
                <div className="lastpart">
                    <div className="lastpart1">
                        <h4>Company</h4>
                        <a href="">About</a>
                        <br />
                        <br />
                        <a href="">Jobs</a>
                        <br />
                        <br />
                        <a href="">For the Records</a>
                        <br />
                        <br />
                    </div>
                    <div className="lastpart2">
                        <h4>Communities</h4>
                        <a href="">For Artists</a>
                        <br />
                        <br />
                        <a href="">Developers</a>
                        <br />
                        <br />
                        <a href="">Advertisisng</a>
                        <br />
                        <br />
                        <a href="">Investors</a>
                        <br />
                        <br />
                        <a href="">Vendors</a>
                        <br />
                        <br />
                    </div>
                    <div className="lastpart3">
                        <h4>Useful LInks</h4>
                        <a href="">Support</a>
                        <br />
                        <br />
                        <a href="">Free mobile App</a>
                        <br />
                        <br />
                    </div>
                    <div className="lastpart4">
                        <h4>Spotify Plans</h4>
                        <a href="">Premium Individual</a>
                        <br />
                        <br />
                        <a href="">Premium Duo</a>
                        <br />
                        <br />
                        <a href="">Premium Family</a>
                        <br />
                        <br />
                        <a href="">Premium Student</a>
                        <br />
                        <br />
                        <a href="">Spotify Free</a>
                        <br />
                        <br />
                    </div>
                    <div className="lastpart5">
                        <button className='social'><i class="fa-brands fa-instagram"></i></button>
                        <button className='social'><i class="fa-brands fa-square-twitter"></i></button>
                        <button className='social'><i class="fa-brands fa-facebook"></i></button>
                    </div>
                </div>
                <div className="whiteline"></div>
                <div className="copywrite">
                <i class="fa-regular fa-copyright"></i>
                 2024 Spotify AB
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default Body;
