
const songs = [

    {
        title: "Alli Pookal",
        artist: "Stephen Zechariah",
        src: "songs/song1.mp3",
        image: "images/song1.jpg"
    },

    {
        title: "Nesamaguren",
        artist: "Stephen Zechariah",
        src: "songs/song2.mp3",
        image: "images/song2.jpg"
    },

    {
        title: "Usuraiya Tholaichen",
        artist: "Stephen Zechariah",
        src: "songs/song3.mp3",
        image: "images/song3.jpg"
    },

    {
        title: "Ennamo Edho",
        artist: "Harris Jayaraj",
        src: "songs/song4.mp3",
        image: "images/song4.jpg"
    },

    {
        title: "Aagaya Suriyanai",
        artist: "Harish Raghavendra, Harini",
        src: "songs/song5.mp3",
        image: "images/song5.jpg"
    },

    {
        title: "Alaakaa Loova",
        artist: "Sai Abhyankkar",
        src: "songs/song6.mp3",
        image: "images/song6.jpg"
    },

    {
        title: "Enadhuyire",
        artist: "Harris Jayaraj",
        src: "songs/song7.mp3",
        image: "images/song7.jpg"
    },

    {
        title: "Kaarkuzhal Kadavaiye",
        artist: "Santhosh Narayanan",
        src: "songs/song8.mp3",
        image: "images/song8.jpg"
    },

    {
        title: "Neelothi",
        artist: "Sooraj Santhosh",
        src: "songs/song9.mp3",
        image: "images/song9.jpg"
    },

    {
        title: "Radhima",
        artist: "Sai Abhyankkar",
        src: "songs/song10.mp3",
        image: "images/song10.jpg"
    },

    {
        title: "Aaruyire",
        artist: "A. R. Rahman",
        src: "songs/song11.mp3",
        image: "images/song11.jpg"
    },

    {
        title: "Adi Penne",
        artist: "Stephen Zechariah",
        src: "songs/song12.mp3",
        image: "images/song12.jpg"
    },

    {
        title: "Amali Thumali ",
        artist: "Harris Jayaraj",
        src: "songs/song13.mp3",
        image: "images/song13.jpg"
    },

    {
        title: "Anal Mele",
        artist: " Harris Jayraj",
        src: "songs/song14.mp3",
        image: "images/song14.jpg"
    },

    {
        title: "Ennai Kollathey ",
        artist: " Ztish",
        src: "songs/song15.mp3",
        image: "images/song15.jpg"
    },

    {
        title: "Innum Konjam Neram",
        artist: "Ar Rahman",
        src: "songs/song16.mp3",
        image: "images/song16.jpg"
    },

    {
        title: "Kannala Kannala ",
        artist: "Hiphop Tamizha",
        src: "songs/song17.mp3",
        image: "images/song17.jpg"
    },

    {
        title: "Koodamela Koodavechi",
        artist: "Imman ",
        src: "songs/song18.mp3",
        image: "images/song18.jpg"
    },

    {
        title: "Pookal Pookum",
        artist: "G.V Prakash",
        src: "songs/song19.mp3",
        image: "images/song19.jpg"
    },

    {
        title: "Raati (Madras Gig)",
        artist: "Bamba Bakya",
        src: "songs/song20.mp3",
        image: "images/song20.jpg"
    },

    {
        title: "Rooja Kadale",
        artist: "Harris Jayaraj",
        src: "songs/song21.mp3",
        image: "images/song21.jpg"
    },

    {
        title: "Vaarayo Vaarayo",
        artist: "Harris Jayaraj ",
        src: "songs/song22.mp3",
        image: "images/song22.jpg"
    },

    {
        title: "Yaar Intha",
        artist: "Yuvan Shankar",
        src: "songs/song23.mp3",
        image: "images/song23.jpg"
    },

    {
        title: "Idhazhin Oram",
        artist: "Anirudh",
        src: "songs/song24.mp3",
        image: "images/song24.jpg"
    },

    {
        title: "Kannazhaga",
        artist: "Anirudh",
        src: "songs/song25.mp3",
        image: "images/song25.jpg"
    },

    {
        title: "Adada Mazhaida",
        artist: " Yuvanshankar Raja",
        src: "songs/song26.mp3",
        image: "images/song26.jpg"
    },

    {
        title: "En Kadhal Solla",
        artist: " Yuvanshankar Raja",
        src: "songs/song27.mp3",
        image: "images/song27.jpg"
    },

    {
        title: "Suthuthe Suthuthe Bhoomi",
        artist: " Yuvanshankar Raja",
        src: "songs/song28.mp3",
        image: "images/song28.jpg"
    },

    {
        title: "Thuli Thuli",
        artist: " Yuvanshankar Raja",
        src: "songs/song29.mp3",
        image: "images/song29.jpg"
    },

    {
        title: "Munbe Vaa",
        artist: "A.R Raham",
        src: "songs/song30.mp3",
        image: "images/song30.jpg"
    }

];




/* ========================================
   AUDIO ELEMENTS
======================================== */

const audio = document.getElementById("audio");

const playPause = document.getElementById("playPause");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");
const like = document.getElementById("like");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTitle =
    document.getElementById("currentTitle");

const currentArtist =
    document.getElementById("currentArtist");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const currentCover =
    document.getElementById("currentCover");


/* ========================================
   SIDEBAR ELEMENTS
======================================== */

const homeBtn =
    document.getElementById("homeBtn");

const searchBtn =
    document.getElementById("searchBtn");

const likedSongsBtn =
    document.getElementById("likedSongsBtn");

const playlistBtn =
    document.getElementById("playlistBtn");

const settingsBtn =
    document.getElementById("settingsBtn");


const homeSection =
    document.getElementById("homeSection");

const searchSection =
    document.getElementById("searchSection");

const likedSection =
    document.getElementById("likedSection");

const playlistSection =
    document.getElementById("playlistSection");

const settingsSection =
    document.getElementById("settingsSection");


/* ========================================
   PLAYER STATE
======================================== */

let currentIndex = 0;

let shuffleMode = false;

let repeatMode = false;


/* ========================================
   AUTOPLAY STATE
======================================== */

let autoplayEnabled =
    localStorage.getItem("autoplayEnabled") !== "false";


/* ========================================
   LIKED SONGS
======================================== */

let likedSongs =
    JSON.parse(
        localStorage.getItem("likedSongs")
    ) || [];


/* ========================================
   PLAYLIST STATE
======================================== */

let playlists =
    JSON.parse(
        localStorage.getItem("playlists")
    ) || {};

let selectedSongIndex = null;


/* ========================================
   LOAD SONG
======================================== */

function loadSong(index) {

    currentIndex = index;

    const song = songs[index];

    if (!song) return;

    audio.src = song.src;

    currentCover.src = song.image;

    currentTitle.textContent = song.title;

    currentArtist.textContent = song.artist;

    audio.load();

    addToRecentlyPlayed(index);

    updateLikeButton();

    updateNowPlayingScreen();


    /* Song change animation */

    const albumCover =
        document.getElementById("currentCover");

    const playerInfo =
        document.querySelector(".player-info");

    if (albumCover) {

        albumCover.classList.remove(
            "song-changing"
        );

        void albumCover.offsetWidth;

        albumCover.classList.add(
            "song-changing"
        );
    }

    if (playerInfo) {

        playerInfo.classList.remove(
            "song-changing"
        );

        void playerInfo.offsetWidth;

        playerInfo.classList.add(
            "song-changing"
        );
    }

}


/* ========================================
   PLAY SONG
======================================== */

function playSong() {

    audio.play()
        .then(() => {

            playPause.textContent = "⏸";

            const visualizer =
                document.getElementById("visualizer");

            if (visualizer) {

                visualizer.classList.add(
                    "playing"
                );

            }

        })
        .catch(error => {

            console.error(
                "Unable to play song:",
                error
            );

        });

}


/* ========================================
   PAUSE SONG
======================================== */

function pauseSong() {

    audio.pause();

    playPause.textContent = "▶";

    const visualizer =
        document.getElementById("visualizer");

    if (visualizer) {

        visualizer.classList.remove(
            "playing"
        );

    }

}


/* ========================================
   PLAY / PAUSE BUTTON
======================================== */

if (playPause) {

    playPause.addEventListener(
        "click",
        () => {

            if (audio.paused) {

                playSong();

            } else {

                pauseSong();

            }

        }
    );

}


/* ========================================
   PREVIOUS SONG
======================================== */

function previousSong() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            songs.length - 1;

    }

    loadSong(currentIndex);

    playSong();

}


if (previous) {

    previous.addEventListener(
        "click",
        previousSong
    );

}


/* ========================================
   NEXT SONG
======================================== */

function nextSong() {

    if (shuffleMode) {

        let randomIndex;

        do {

            randomIndex =
                Math.floor(
                    Math.random() *
                    songs.length
                );

        } while (
            randomIndex === currentIndex &&
            songs.length > 1
        );

        currentIndex = randomIndex;

    } else {

        currentIndex++;

        if (
            currentIndex >=
            songs.length
        ) {

            currentIndex = 0;

        }

    }

    loadSong(currentIndex);

    playSong();

}


if (next) {

    next.addEventListener(
        "click",
        nextSong
    );

}


/* ========================================
   SHUFFLE
======================================== */

if (shuffle) {

    shuffle.addEventListener(
        "click",
        () => {

            shuffleMode =
                !shuffleMode;

            shuffle.classList.toggle(
                "active-control",
                shuffleMode
            );

        }
    );

}


/* ========================================
   REPEAT
======================================== */

if (repeat) {

    repeat.addEventListener(
        "click",
        () => {

            repeatMode =
                !repeatMode;

            repeat.classList.toggle(
                "active-control",
                repeatMode
            );

        }
    );

}


/* ========================================
   SONG ENDED
======================================== */

audio.addEventListener(
    "ended",
    () => {

        if (repeatMode) {

            audio.currentTime = 0;

            playSong();

        } else if (autoplayEnabled) {

            nextSong();

        } else {

            playPause.textContent = "▶";

            const visualizer =
                document.getElementById(
                    "visualizer"
                );

            if (visualizer) {

                visualizer.classList.remove(
                    "playing"
                );

            }

        }

    }
);


/* ========================================
   PROGRESS BAR
======================================== */

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) return;

        progress.value =
            (
                audio.currentTime /
                audio.duration
            ) * 100;

        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);


if (progress) {

    progress.addEventListener(
        "input",
        () => {

            if (!audio.duration) return;

            audio.currentTime =
                (
                    progress.value / 100
                ) * audio.duration;

        }
    );

}


/* ========================================
   FORMAT TIME
======================================== */

function formatTime(seconds) {

    if (isNaN(seconds)) {

        return "0:00";

    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const secondsFormatted =
        Math.floor(
            seconds % 60
        )
        .toString()
        .padStart(2, "0");

    return (
        minutes +
        ":" +
        secondsFormatted
    );

}


/* ========================================
   VOLUME
======================================== */

if (volume) {

    volume.addEventListener(
        "input",
        () => {

            audio.volume =
                volume.value;

            if (
                audio.volume > 0
            ) {

                previousVolume =
                    audio.volume;

            }

            updateVolumeIcon();

        }
    );

}


/* ========================================
   LIKED SONGS
======================================== */

function updateLikeButton() {

    if (!like) return;

    if (
        likedSongs.includes(
            currentIndex
        )
    ) {

        like.textContent = "♥";

    } else {

        like.textContent = "♡";

    }

}


if (like) {

    like.addEventListener(
        "click",
        () => {

            if (
                likedSongs.includes(
                    currentIndex
                )
            ) {

                likedSongs =
                    likedSongs.filter(
                        index =>
                            index !==
                            currentIndex
                    );

            } else {

                likedSongs.push(
                    currentIndex
                );

            }

            localStorage.setItem(
                "likedSongs",
                JSON.stringify(
                    likedSongs
                )
            );

            updateLikeButton();

            displayLikedSongs();

        }
    );

}


/* ========================================
   DISPLAY ALL SONGS
======================================== */

function displayAllSongs() {

    const container =
        document.getElementById(
            "songList"
        );

    if (!container) return;

    container.innerHTML = "";


    const songCount =
        document.getElementById(
            "songCount"
        );

    if (songCount) {

        songCount.textContent =
            `(${songs.length})`;

    }


    songs.forEach(
        (song, index) => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "song-card";

            card.dataset.index =
                index;


            card.innerHTML = `

                <div class="card-image">

                    <img
                        src="${song.image}"
                        alt="${song.title}"
                    >

                    <button
                        class="card-play-btn">
                        ▶
                    </button>

                </div>

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

                <button
                    class="addPlaylistBtn">
                    + Playlist
                </button>

            `;


            /* Card click */

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.classList.contains(
                            "addPlaylistBtn"
                        ) ||
                        event.target.classList.contains(
                            "card-play-btn"
                        )
                    ) {

                        return;

                    }

                    loadSong(index);

                    playSong();

                }
            );


            /* Card play button */

            const playButton =
                card.querySelector(
                    ".card-play-btn"
                );

            if (playButton) {

                playButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        loadSong(index);

                        playSong();

                    }
                );

            }


            /* Playlist button */

            const playlistButton =
                card.querySelector(
                    ".addPlaylistBtn"
                );

            if (playlistButton) {

                playlistButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        selectedSongIndex =
                            index;

                        openPlaylistPopup();

                    }
                );

            }


            container.appendChild(
                card
            );

        }
    );

}


/* ========================================
   SIDEBAR
======================================== */

function hideSections() {

    if (homeSection) {

        homeSection.classList.add(
            "hidden"
        );

    }

    if (searchSection) {

        searchSection.classList.add(
            "hidden"
        );

    }

    if (likedSection) {

        likedSection.classList.add(
            "hidden"
        );

    }

    if (playlistSection) {

        playlistSection.classList.add(
            "hidden"
        );

    }

    if (settingsSection) {

        settingsSection.classList.add(
            "hidden"
        );

    }

}


if (homeBtn) {

    homeBtn.addEventListener(
        "click",
        () => {

            hideSections();

            if (homeSection) {

                homeSection.classList.remove(
                    "hidden"
                );

            }

            setActiveSidebar(
                homeBtn
            );

        }
    );

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        () => {

            hideSections();

            if (searchSection) {

                searchSection.classList.remove(
                    "hidden"
                );

            }

            setActiveSidebar(
                searchBtn
            );

        }
    );

}


if (likedSongsBtn) {

    likedSongsBtn.addEventListener(
        "click",
        () => {

            hideSections();

            if (likedSection) {

                likedSection.classList.remove(
                    "hidden"
                );

            }

            displayLikedSongs();

            setActiveSidebar(
                likedSongsBtn
            );

        }
    );

}


if (playlistBtn) {

    playlistBtn.addEventListener(
        "click",
        () => {

            hideSections();

            if (playlistSection) {

                playlistSection.classList.remove(
                    "hidden"
                );

            }

            displayPlaylists();

            setActiveSidebar(
                playlistBtn
            );

        }
    );

}


/* ========================================
   LIKED SONG DISPLAY
======================================== */

function displayLikedSongs() {

    const container =
        document.getElementById(
            "likedSongsList"
        );

    if (!container) return;

    container.innerHTML = "";


    if (likedSongs.length === 0) {

        container.innerHTML =
            "<p>You haven't liked any songs yet ❤️</p>";

        return;

    }


    likedSongs.forEach(
        index => {

            const song =
                songs[index];

            if (!song) return;

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "song-card";


            card.innerHTML = `

                <img
                    src="${song.image}"
                    alt="${song.title}"
                >

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

                <button
                    class="removeLikeBtn">
                    💔 Remove
                </button>

            `;


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.classList.contains(
                            "removeLikeBtn"
                        )
                    ) {

                        return;

                    }

                    loadSong(index);

                    playSong();

                }
            );


            const removeButton =
                card.querySelector(
                    ".removeLikeBtn"
                );

            if (removeButton) {

                removeButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        likedSongs =
                            likedSongs.filter(
                                i =>
                                    i !== index
                            );

                        localStorage.setItem(
                            "likedSongs",
                            JSON.stringify(
                                likedSongs
                            )
                        );

                        updateLikeButton();

                        displayLikedSongs();

                    }
                );

            }


            container.appendChild(
                card
            );

        }
    );

}


/* ========================================
   SEARCH DROPDOWN
======================================== */

const searchInput =
    document.getElementById("searchInput");

const searchSuggestions =
    document.getElementById("searchSuggestions");

const searchResults =
    document.getElementById("searchResults");


if (searchInput) {

    searchInput.addEventListener("input", () => {

        const text =
            searchInput.value
                .toLowerCase()
                .trim();

        /* Clear old results */

        if (searchResults) {
            searchResults.innerHTML = "";
        }

        /* Nothing typed */

        if (text === "") {

            if (searchSuggestions) {
                searchSuggestions.innerHTML = "";
                searchSuggestions.classList.add("hidden");
            }

            return;
        }


        /* Find matching songs */

        const matches =
            songs.filter(song => {

                const title =
                    song.title.toLowerCase();

                const artist =
                    song.artist.toLowerCase();

                return (
                    title.startsWith(text) ||
                    artist.startsWith(text)
                );

            });


        /* No matches */

        if (matches.length === 0) {

            if (searchSuggestions) {

                searchSuggestions.innerHTML = `
                    <div class="no-suggestion">
                        No songs found
                    </div>
                `;

                searchSuggestions.classList.remove(
                    "hidden"
                );

            }

            return;
        }


        /* Create dropdown suggestions */

        if (searchSuggestions) {

            searchSuggestions.innerHTML = "";

            matches.forEach(song => {

                const index =
                    songs.indexOf(song);

                const suggestion =
                    document.createElement("div");

                suggestion.className =
                    "search-suggestion";


                suggestion.innerHTML = `

                    <img
                        src="${song.image}"
                        alt="${song.title}"
                    >

                    <div class="suggestion-info">

                        <h3>
                            ${song.title}
                        </h3>

                        <p>
                            ${song.artist}
                        </p>

                    </div>

                `;


                suggestion.addEventListener(
                    "click",
                    () => {

                        loadSong(index);

                        playSong();

                        searchInput.value =
                            song.title;

                        searchSuggestions.classList.add(
                            "hidden"
                        );

                    }
                );


                searchSuggestions.appendChild(
                    suggestion
                );

            });


            searchSuggestions.classList.remove(
                "hidden"
            );

        }

    });


    /* Hide dropdown when clicking outside */

    document.addEventListener("click", event => {

        if (
            !event.target.closest(".search-box")
        ) {

            if (searchSuggestions) {

                searchSuggestions.classList.add(
                    "hidden"
                );

            }

        }

    });

}


/* ========================================
   PLAYLIST SYSTEM
======================================== */

const createPlaylistBtn =
    document.getElementById(
        "createPlaylistBtn"
    );

const playlistName =
    document.getElementById(
        "playlistName"
    );


if (createPlaylistBtn) {

    createPlaylistBtn.addEventListener(
        "click",
        () => {

            const name =
                playlistName.value.trim();


            if (name === "") {

                alert(
                    "Enter a playlist name."
                );

                return;

            }


            if (playlists[name]) {

                alert(
                    "Playlist already exists."
                );

                return;

            }


            playlists[name] = [];

            savePlaylists();

            playlistName.value = "";

            displayPlaylists();

        }
    );

}


function savePlaylists() {

    localStorage.setItem(
        "playlists",
        JSON.stringify(
            playlists
        )
    );

}


/* ========================================
   DISPLAY PLAYLISTS
======================================== */

function displayPlaylists() {

    const container =
        document.getElementById(
            "playlistList"
        );

    if (!container) return;

    container.innerHTML = "";


    const names =
        Object.keys(
            playlists
        );


    if (names.length === 0) {

        container.innerHTML =
            "<p>No playlists yet. Create one above.</p>";

        return;

    }


    names.forEach(
        name => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "playlist-item";


            item.innerHTML = `

                <strong>
                    📂 ${name}
                </strong>

                <span>
                    ${playlists[name].length}
                    songs
                </span>

                <button>
                    Delete
                </button>

            `;


            item.addEventListener(
                "click",
                event => {

                    if (
                        event.target.tagName ===
                        "BUTTON"
                    ) {

                        return;

                    }

                    showPlaylist(name);

                }
            );


            const deleteButton =
                item.querySelector(
                    "button"
                );


            if (deleteButton) {

                deleteButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        delete playlists[name];

                        savePlaylists();

                        displayPlaylists();

                        const songsContainer =
                            document.getElementById(
                                "playlistSongs"
                            );

                        if (songsContainer) {

                            songsContainer.innerHTML =
                                "";

                        }

                    }
                );

            }


            container.appendChild(
                item
            );

        }
    );

}


/* ========================================
   SHOW PLAYLIST SONGS
======================================== */

function showPlaylist(name) {

    const container =
        document.getElementById(
            "playlistSongs"
        );

    if (!container) return;

    container.innerHTML = `

        <h3 class="playlist-title">
            📂 ${name}
        </h3>

    `;


    if (
        playlists[name].length === 0
    ) {

        container.innerHTML +=
            "<p>This playlist is empty.</p>";

        return;

    }


    playlists[name].forEach(
        index => {

            const song =
                songs[index];

            if (!song) return;

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "song-card";


            card.innerHTML = `

                <img
                    src="${song.image}"
                    alt="${song.title}"
                >

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

                <button>
                    🗑 Remove
                </button>

            `;


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.tagName ===
                        "BUTTON"
                    ) {

                        return;

                    }

                    loadSong(index);

                    playSong();

                }
            );


            const removeButton =
                card.querySelector(
                    "button"
                );


            if (removeButton) {

                removeButton.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        playlists[name] =
                            playlists[name].filter(
                                songIndex =>
                                    songIndex !==
                                    index
                            );

                        savePlaylists();

                        showPlaylist(name);

                        displayPlaylists();

                    }
                );

            }


            container.appendChild(
                card
            );

        }
    );

}


/* ========================================
   PLAYLIST POPUP
======================================== */

const popup =
    document.getElementById(
        "playlistPopup"
    );

const choices =
    document.getElementById(
        "playlistChoices"
    );


function openPlaylistPopup() {

    if (!popup || !choices) return;

    choices.innerHTML = "";


    const names =
        Object.keys(
            playlists
        );


    if (names.length === 0) {

        choices.innerHTML =
            "<p>Create a playlist first.</p>";

    } else {

        names.forEach(
            name => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.className =
                    "playlist-choice";

                button.textContent =
                    "📂 " + name;


                button.addEventListener(
                    "click",
                    () => {

                        addSongToPlaylist(
                            name
                        );

                    }
                );


                choices.appendChild(
                    button
                );

            }
        );

    }


    popup.classList.remove(
        "hidden"
    );

}


/* ========================================
   ADD SONG TO PLAYLIST
======================================== */

function addSongToPlaylist(name) {

    if (
        selectedSongIndex === null
    ) {

        return;

    }


    if (
        !playlists[name].includes(
            selectedSongIndex
        )
    ) {

        playlists[name].push(
            selectedSongIndex
        );

        savePlaylists();

        alert(
            "Song added to " + name
        );

    } else {

        alert(
            "Song is already in this playlist."
        );

    }


    if (popup) {

        popup.classList.add(
            "hidden"
        );

    }

    displayPlaylists();

}


/* ========================================
   CLOSE PLAYLIST POPUP
======================================== */

const closePopup =
    document.getElementById(
        "closePopup"
    );


if (closePopup) {

    closePopup.addEventListener(
        "click",
        () => {

            if (popup) {

                popup.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* ========================================
   RECENTLY PLAYED
======================================== */

function addToRecentlyPlayed(index) {

    let recentlyPlayed =
        JSON.parse(
            localStorage.getItem(
                "recentlyPlayed"
            )
        ) || [];


    recentlyPlayed =
        recentlyPlayed.filter(
            i => i !== index
        );


    recentlyPlayed.unshift(
        index
    );


    recentlyPlayed =
        recentlyPlayed.slice(
            0,
            5
        );


    localStorage.setItem(
        "recentlyPlayed",
        JSON.stringify(
            recentlyPlayed
        )
    );


    displayRecentlyPlayed();

}


/* ========================================
   DISPLAY RECENTLY PLAYED
======================================== */

function displayRecentlyPlayed() {

    const container =
        document.getElementById(
            "recentlyPlayedList"
        );

    if (!container) return;

    container.innerHTML = "";


    const recentlyPlayed =
        JSON.parse(
            localStorage.getItem(
                "recentlyPlayed"
            )
        ) || [];


    recentlyPlayed.forEach(
        index => {

            const song =
                songs[index];

            if (!song) return;


            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "song-card";


            card.innerHTML = `

                <img
                    src="${song.image}"
                    alt="${song.title}"
                >

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

            `;


            card.addEventListener(
                "click",
                () => {

                    loadSong(index);

                    playSong();

                }
            );


            container.appendChild(
                card
            );

        }
    );

}


/* ========================================
   HERO BUTTON
======================================== */

const heroExploreBtn =
    document.getElementById(
        "heroExploreBtn"
    );


if (heroExploreBtn) {

    heroExploreBtn.addEventListener(
        "click",
        () => {

            const songList =
                document.getElementById(
                    "songList"
                );

            if (songList) {

                songList.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


/* ========================================
   UP NEXT QUEUE
======================================== */

const queueBtn =
    document.getElementById(
        "queueBtn"
    );

const queuePanel =
    document.getElementById(
        "queuePanel"
    );

const closeQueue =
    document.getElementById(
        "closeQueue"
    );

const queueList =
    document.getElementById(
        "queueList"
    );


function displayQueue() {

    if (!queueList) return;

    queueList.innerHTML = "";


    for (
        let i = 1;
        i <= songs.length;
        i++
    ) {

        const index =
            (currentIndex + i) %
            songs.length;

        const song =
            songs[index];


        const item =
            document.createElement(
                "div"
            );

        item.className =
            "queue-song";


        item.innerHTML = `

            <img
                src="${song.image}"
                alt="${song.title}"
            >

            <div class="queue-song-info">

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

            </div>

        `;


        item.addEventListener(
            "click",
            () => {

                loadSong(index);

                playSong();

                if (queuePanel) {

                    queuePanel.classList.add(
                        "hidden"
                    );

                }

                displayQueue();

            }
        );


        queueList.appendChild(
            item
        );

    }

}


if (queueBtn) {

    queueBtn.addEventListener(
        "click",
        () => {

            if (!queuePanel) return;

            queuePanel.classList.toggle(
                "hidden"
            );


            if (
                !queuePanel.classList.contains(
                    "hidden"
                )
            ) {

                displayQueue();

            }

        }
    );

}


if (closeQueue) {

    closeQueue.addEventListener(
        "click",
        () => {

            if (queuePanel) {

                queuePanel.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* ========================================
   FULL SCREEN NOW PLAYING
======================================== */

const nowPlayingBtn =
    document.getElementById(
        "nowPlayingBtn"
    );

const nowPlayingScreen =
    document.getElementById(
        "nowPlayingScreen"
    );

const closeNowPlaying =
    document.getElementById(
        "closeNowPlaying"
    );

const nowPlayingCover =
    document.getElementById(
        "nowPlayingCover"
    );

const nowPlayingTitle =
    document.getElementById(
        "nowPlayingTitle"
    );

const nowPlayingArtist =
    document.getElementById(
        "nowPlayingArtist"
    );


function updateNowPlayingScreen() {

    if (
        !songs[currentIndex]
    ) return;


    const song =
        songs[currentIndex];


    if (nowPlayingCover) {

        nowPlayingCover.src =
            song.image;

    }

    if (nowPlayingTitle) {

        nowPlayingTitle.textContent =
            song.title;

    }

    if (nowPlayingArtist) {

        nowPlayingArtist.textContent =
            song.artist;

    }

}


/* Open */

if (nowPlayingBtn) {

    nowPlayingBtn.addEventListener(
        "click",
        () => {

            updateNowPlayingScreen();

            if (nowPlayingScreen) {

                nowPlayingScreen.classList.remove(
                    "hidden"
                );

            }

        }
    );

}


/* Close */

if (closeNowPlaying) {

    closeNowPlaying.addEventListener(
        "click",
        () => {

            if (nowPlayingScreen) {

                nowPlayingScreen.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* ========================================
   MUTE / VOLUME CONTROL
======================================== */

const muteBtn =
    document.getElementById(
        "muteBtn"
    );

let previousVolume = 1;


if (muteBtn) {

    muteBtn.addEventListener(
        "click",
        () => {

            if (
                audio.volume > 0
            ) {

                previousVolume =
                    audio.volume;

                audio.volume = 0;

                if (volume) {

                    volume.value = 0;

                }

                muteBtn.textContent =
                    "🔇";

            } else {

                audio.volume =
                    previousVolume;

                if (volume) {

                    volume.value =
                        previousVolume;

                }

                updateVolumeIcon();

            }

        }
    );

}


function updateVolumeIcon() {

    if (!muteBtn) return;


    if (
        audio.volume === 0
    ) {

        muteBtn.textContent =
            "🔇";

    } else if (
        audio.volume < 0.5
    ) {

        muteBtn.textContent =
            "🔉";

    } else {

        muteBtn.textContent =
            "🔊";

    }

}


/* ========================================
   SIDEBAR ACTIVE BUTTON
======================================== */

const sidebarButtons =
    document.querySelectorAll(
        ".sidebar button"
    );


function setActiveSidebar(button) {

    sidebarButtons.forEach(
        btn => {

            btn.classList.remove(
                "active"
            );

        }
    );


    if (button) {

        button.classList.add(
            "active"
        );

    }

}


/* ========================================
   KEYBOARD SHORTCUTS
======================================== */

document.addEventListener(
    "keydown",
    event => {

        /* Don't trigger while typing */

        if (
            event.target.tagName ===
            "INPUT" ||
            event.target.tagName ===
            "TEXTAREA"
        ) {

            return;

        }


        /* SPACE = Play / Pause */

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            if (audio.paused) {

                playSong();

            } else {

                pauseSong();

            }

        }


        /* RIGHT ARROW = Next */

        if (
            event.code ===
            "ArrowRight"
        ) {

            nextSong();

        }


        /* LEFT ARROW = Previous */

        if (
            event.code ===
            "ArrowLeft"
        ) {

            previousSong();

        }


        /* M = Mute */

        if (
            event.key.toLowerCase() ===
            "m"
        ) {

            if (muteBtn) {

                muteBtn.click();

            }

        }


        /* L = Like */

        if (
            event.key.toLowerCase() ===
            "l"
        ) {

            if (like) {

                like.click();

            }

        }

    }
);


/* ========================================
   SETTINGS
======================================== */

const autoplayToggle =
    document.getElementById(
        "autoplayToggle"
    );


if (settingsBtn) {

    settingsBtn.addEventListener(
        "click",
        () => {

            hideSections();

            if (settingsSection) {

                settingsSection.classList.remove(
                    "hidden"
                );

            }

            setActiveSidebar(
                settingsBtn
            );

        }
    );

}


/* ========================================
   AUTOPLAY SETTING
======================================== */

if (autoplayToggle) {

    autoplayToggle.checked =
        autoplayEnabled;


    autoplayToggle.addEventListener(
        "change",
        () => {

            autoplayEnabled =
                autoplayToggle.checked;

            localStorage.setItem(
                "autoplayEnabled",
                autoplayEnabled
            );

        }
    );

}


/* ========================================
   SHORTCUTS POPUP
======================================== */

const shortcutsBtn =
    document.getElementById(
        "shortcutsBtn"
    );

const shortcutsPopup =
    document.getElementById(
        "shortcutsPopup"
    );

const closeShortcuts =
    document.getElementById(
        "closeShortcuts"
    );


if (shortcutsBtn) {

    shortcutsBtn.addEventListener(
        "click",
        () => {

            if (shortcutsPopup) {

                shortcutsPopup.classList.remove(
                    "hidden"
                );

            }

        }
    );

}


if (closeShortcuts) {

    closeShortcuts.addEventListener(
        "click",
        () => {

            if (shortcutsPopup) {

                shortcutsPopup.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* ========================================
   START WEBSITE
======================================== */

loadSong(0);

displayAllSongs();

displayRecentlyPlayed();

setActiveSidebar(homeBtn);

// =========================
// EQUALIZER
// =========================

const equalizerBtn = document.getElementById("equalizerBtn");
const equalizerPanel = document.getElementById("equalizerPanel");

const bassControl = document.getElementById("bassControl");
const vocalControl = document.getElementById("vocalControl");
const trebleControl = document.getElementById("trebleControl");

const bassValue = document.getElementById("bassValue");
const vocalValue = document.getElementById("vocalValue");
const trebleValue = document.getElementById("trebleValue");

const resetEqualizer = document.getElementById("resetEqualizer");

let audioContext = null;
let sourceNode = null;

let bassFilter = null;
let vocalFilter = null;
let trebleFilter = null;


// =========================
// OPEN / CLOSE EQUALIZER
// =========================

equalizerBtn.addEventListener("click", () => {

    equalizerPanel.classList.toggle("hidden");

    if (equalizerPanel.classList.contains("hidden")) {

        equalizerBtn.textContent = "Open";

    } else {

        equalizerBtn.textContent = "Close";

    }

});


// =========================
// CREATE AUDIO EQUALIZER
// =========================

function setupEqualizer() {

    if (audioContext) {
        return;
    }

    if (!audio) {
        console.error("Audio element not found.");
        return;
    }

    try {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContextClass) {
            console.error("Web Audio API is not supported.");
            return;
        }

        const context = new AudioContextClass();

        const source =
            context.createMediaElementSource(audio);


        // BASS
        const bass =
            context.createBiquadFilter();

        bass.type = "lowshelf";
        bass.frequency.value = 200;
        bass.gain.value = 0;


        // VOCALS
        const vocal =
            context.createBiquadFilter();

        vocal.type = "peaking";
        vocal.frequency.value = 1000;
        vocal.Q.value = 1;
        vocal.gain.value = 0;


        // TREBLE
        const treble =
            context.createBiquadFilter();

        treble.type = "highshelf";
        treble.frequency.value = 4000;
        treble.gain.value = 0;


        // CONNECT FILTERS
        source
            .connect(bass)
            .connect(vocal)
            .connect(treble)
            .connect(context.destination);


        audioContext = context;
        sourceNode = source;

        bassFilter = bass;
        vocalFilter = vocal;
        trebleFilter = treble;

    } catch (error) {

        console.error(
            "Equalizer setup failed:",
            error
        );

    }

}


// =========================
// BASS
// =========================

bassControl.addEventListener("input", () => {

    const value = Number(bassControl.value);

    bassValue.textContent = value + " dB";

    setupEqualizer();

    if (bassFilter) {
        bassFilter.gain.value = value;
    }

});


// =========================
// VOCALS
// =========================

vocalControl.addEventListener("input", () => {

    const value = Number(vocalControl.value);

    vocalValue.textContent = value + " dB";

    setupEqualizer();

    if (vocalFilter) {
        vocalFilter.gain.value = value;
    }

});


// =========================
// TREBLE
// =========================

trebleControl.addEventListener("input", () => {

    const value = Number(trebleControl.value);

    trebleValue.textContent = value + " dB";

    setupEqualizer();

    if (trebleFilter) {
        trebleFilter.gain.value = value;
    }

});


// =========================
// RESET
// =========================

resetEqualizer.addEventListener("click", () => {

    bassControl.value = 0;
    vocalControl.value = 0;
    trebleControl.value = 0;

    bassValue.textContent = "0 dB";
    vocalValue.textContent = "0 dB";
    trebleValue.textContent = "0 dB";

    if (bassFilter) {
        bassFilter.gain.value = 0;
    }

    if (vocalFilter) {
        vocalFilter.gain.value = 0;
    }

    if (trebleFilter) {
        trebleFilter.gain.value = 0;
    }

});

