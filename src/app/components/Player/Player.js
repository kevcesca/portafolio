import Image from "next/image"
import style from './Player.module.css'

function _interopDefault(ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styledComponents = require('styled-components');
var React = require('react');
var React__default = _interopDefault(React);
var loopCurrentBtn = '/images/loop_current~becmfmpq.png';
var loopNoneBtn = '/images/loop_none~beQtXZXI.png';
var previousBtn = '/images/previous~HcmvNVfM.png';
var playBtn = '/images/play~HzjgLbtN.png';
var pauseBtn = '/images/pause~oJHQXTCg.png';
var nextBtn = '/images/next~bgHcmLNb.png';
var shuffleAllBtn = '/images/shuffle_all~iYpDLHuL.png';
var shuffleNoneBtn = '/images/shuffle_none~rRNEYewC.png';

function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
}

var styles = { "title_time_wrapper": "_wKo5X", "buttons_volume_wrapper": "_2_1sf" };

var styles$1 = { "wrapper": "_oGACf" };

var PageTemplate = function PageTemplate(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$1.wrapper
    }, children);
};

var styles$2 = { "wrapper": "_1EWMa" };

var PlayerTemplate = function PlayerTemplate(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$2.wrapper
    }, children);
};

var styles$3 = { "title": "_3q4Ah" };

var Title = function Title(props) {
    return /*#__PURE__*/React__default.createElement("h3", {
        className: style.titles
    }, props.title);
};

var styles$4 = { "time": "_tAQkw" };

var Time = function Time(props) {
    return /*#__PURE__*/React__default.createElement("h3", {
        className: style.titles
    }, props.time);
};

var styles$5 = { "container": "_2cSIF", "slider": "_mIY65" };

var Progress = function Progress(props) {
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$5.container
    }, /*#__PURE__*/React__default.createElement("input", {
        type: "range",
        min: "1",
        max: "100",
        step: "1",
        value: props.value,
        className: styles$5.slider,
        id: "myRange",
        onChange: props.onChange,
        onMouseUp: props.onMouseUp,
        onTouchEnd: props.onTouchEnd,
        style: {
            background: "linear-gradient(90deg, var(--progressUsed) " + Math.floor(props.value) + "%, var(--progressLeft) " + Math.floor(props.value) + "%)"
        }
    }));
};

var styles$6 = { "wrapper": "_2FsrM" };

var ButtonsBox = function ButtonsBox(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$6.wrapper
    }, children);
};

var styles$7 = { "loop_current": "_3CCfI" };

var LoopCurrent = function LoopCurrent(props) {
    return /*#__PURE__*/React__default.createElement("img", {
        className: style.imgs,
        src: props.src,
        onClick: props.onClick
    });
};

var styles$8 = { "previous": "_3Juzi" };

var Previous = function Previous(props) {
    return /*#__PURE__*/React__default.createElement("img", {
        className: style.imgs,
        src: props.src,
        onClick: props.onClick
    });
};

var styles$9 = { "play": "_19ycA" };

var Play = function Play(props) {
    return /*#__PURE__*/React__default.createElement("img", {
        className: style.imgs,
        src: props.src,
        onClick: props.onClick
    });
};

var styles$a = { "pause": "_1mI0y" };

var Pause = function Pause(props) {
    return /*#__PURE__*/React__default.createElement("img", {
        className: style.imgs,
        src: props.src,
        onClick: props.onClick
    });
};

var styles$b = { "next": "_3a3Vy" };

var Next = function Next(props) {
    return /*#__PURE__*/React__default.createElement("img", {
        className: style.imgs,
        src: props.src,
        onClick: props.onClick
    });
};

var styles$c = { "shuffle": "_8c4KL" };

var Shuffle = function Shuffle(props) {
    return /*#__PURE__*/React__default.createElement("img", {
        className: style.imgs,
        src: props.src,
        onClick: props.onClick
    });
};

var styles$d = { "wrapper": "_1cpXy", "slider": "_awgvT" };

var Volume = function Volume(props) {
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$d.wrapper
    }, /*#__PURE__*/React__default.createElement("input", {
        type: "range",
        min: "1",
        max: "100",
        defaultValue: "80",
        className: styles$d.slider,
        id: "myRange",
        onChange: props.onChange,
        style: {
            background: "linear-gradient(90deg, var(--volumeUsed) " + props.value * 100 + "%, var(--volumeLeft) " + props.value * 100 + "%)"
        }
    }));
};

var styles$e = { "wrapper": "_RZMQZ" };

var PlaylistTemplate = function PlaylistTemplate(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$e.wrapper
    }, children);
};

var styles$f = { "track": "_1l2NE", "active": "_2ybYQ" };

var PlaylistItem = function PlaylistItem(props) {
    return /*#__PURE__*/React__default.createElement("p", {
        className: props.className == 'active' ? styles$f.active : styles$f.track,
        "data-key": props.data_key,
        src: props.src,
        title: props.title,
        onClick: props.onClick
    }, props.title);
};

var styles$g = { "wrapper": "_8a8Wj" };

var TagsTemplate = function TagsTemplate(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$g.wrapper
    }, children);
};

var styles$h = { "tag": "_1qrha", "active": "_2AaIQ" };

var TagItem = function TagItem(props) {
    return /*#__PURE__*/React__default.createElement("div", {
        className: props.className == 'active' ? styles$h.active : styles$h.tag,
        onClick: props.onClick
    }, props.tag);
};

var styles$i = { "wrapper": "_3fz7s", "search": "_1PreE" };

var Search = function Search(_ref) {
    var onChange = _ref.onChange,
        value = _ref.value,
        placeholder = _ref.placeholder;
    return /*#__PURE__*/React__default.createElement("div", {
        className: styles$i.wrapper
    }, /*#__PURE__*/React__default.createElement("input", {
        type: "text",
        className: styles$i.search,
        onChange: onChange,
        value: value,
        placeholder: placeholder
    }));
};

var _templateObject;
var colors = "html{\n    --tagsBackground: #9440f3;\n    --tagsText: #ffffff;\n    --tagsBackgroundHoverActive: #2cc0a0;\n    --tagsTextHoverActive: #ffffff;\n    --searchBackground: #18191f;\n    --searchText: #ffffff;\n    --searchPlaceHolder: #575a77;\n    --playerBackground: #18191f;\n    --titleColor: #ffffff;\n    --timeColor: #ffffff;\n    --progressSlider: #9440f3;\n    --progressUsed: #ffffff;\n    --progressLeft: #151616;\n    --volumeSlider: #9440f3;\n    --volumeUsed: #ffffff;\n    --volumeLeft:  #151616;\n    --playlistBackground: #18191f;\n    --playlistText: #575a77;\n    --playlistBackgroundHoverActive:  #18191f;\n    --playlistTextHoverActive: #ffffff;\n  }";

var Player = function Player(_ref) {
    var trackList = _ref.trackList,
        _ref$includeTags = _ref.includeTags,
        includeTags = _ref$includeTags === void 0 ? true : _ref$includeTags,
        _ref$includeSearch = _ref.includeSearch,
        includeSearch = _ref$includeSearch === void 0 ? true : _ref$includeSearch,
        _ref$showPlaylist = _ref.showPlaylist,
        showPlaylist = _ref$showPlaylist === void 0 ? true : _ref$showPlaylist,
        _ref$autoPlayNextTrac = _ref.autoPlayNextTrack,
        autoPlayNextTrack = _ref$autoPlayNextTrac === void 0 ? true : _ref$autoPlayNextTrac,
        _ref$customColorSchem = _ref.customColorScheme,
        customColorScheme = _ref$customColorSchem === void 0 ? colors : _ref$customColorSchem;

    var _useState = React.useState(""),
        query = _useState[0],
        updateQuery = _useState[1];

    var playlist = [];

    var _useState2 = React.useState(null),
        audio = _useState2[0],
        setAudio = _useState2[1];

    var _useState3 = React.useState(false),
        active = _useState3[0],
        setActive = _useState3[1];

    var _useState4 = React.useState(""),
        title = _useState4[0],
        setTitle = _useState4[1];

    var _useState5 = React.useState(0),
        length = _useState5[0],
        setLength = _useState5[1];

    var _useState6 = React.useState(0),
        time = _useState6[0],
        setTime = _useState6[1];

    var _useState7 = React.useState(1),
        slider = _useState7[0],
        setSlider = _useState7[1];

    var _useState8 = React.useState(0),
        drag = _useState8[0],
        setDrag = _useState8[1];

    var _useState9 = React.useState(0.8),
        volume = _useState9[0],
        setVolume = _useState9[1];

    var _useState10 = React.useState(0),
        end = _useState10[0],
        setEnd = _useState10[1];

    var _useState11 = React.useState(false),
        shuffled = _useState11[0],
        setShuffled = _useState11[1];

    var _useState12 = React.useState(false),
        looped = _useState12[0],
        setLooped = _useState12[1];

    var _useState13 = React.useState([]),
        filter = _useState13[0],
        setFilter = _useState13[1];

    var _useState14 = React.useState(0),
        curTrack = _useState14[0],
        setCurTrack = _useState14[1];

    var GlobalStyles = styledComponents.createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n", "\n"])), customColorScheme);

    var fmtMSS = function fmtMSS(s) {
        return new Date(1000 * s).toISOString().substr(15, 4);
    };

    React.useEffect(function () {
        var audio = new Audio(trackList[curTrack].url);

        var setAudioData = function setAudioData() {
            setLength(audio.duration);
            setTime(audio.currentTime);
        };

        var setAudioTime = function setAudioTime() {
            var curTime = audio.currentTime;
            setTime(curTime);
            setSlider(curTime ? (curTime * 100 / audio.duration).toFixed(1) : 0);
        };

        var setAudioVolume = function setAudioVolume() {
            return setVolume(audio.volume);
        };

        var setAudioEnd = function setAudioEnd() {
            return setEnd(end += 1);
        };

        audio.addEventListener("loadeddata", setAudioData);
        audio.addEventListener("timeupdate", setAudioTime);
        audio.addEventListener("volumechange", setAudioVolume);
        audio.addEventListener("ended", setAudioEnd);
        setAudio(audio);
        setTitle(trackList[curTrack].title);
        return function () {
            audio.pause();
        };
    }, []);
    var tags = [];
    trackList.forEach(function (track) {
        track.tags.forEach(function (tag) {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });

    var shufflePlaylist = function shufflePlaylist(arr) {
        if (arr.length === 1) return arr;
        var rand = Math.floor(Math.random() * arr.length);
        return [arr[rand]].concat(shufflePlaylist(arr.filter(function (_, i) {
            return i != rand;
        })));
    };

    var isInitialMount = React.useRef(true);
    React.useEffect(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (shuffled) {
                playlist = shufflePlaylist(playlist);
            }

            !looped && autoPlayNextTrack ? next() : play();
        }
    }, [end]);
    React.useEffect(function () {
        if (audio != null) {
            audio.volume = volume;
        }
    }, [volume]);
    React.useEffect(function () {
        if (audio != null) {
            pause();
            var val = Math.round(drag * audio.duration / 100);
            audio.currentTime = val;
        }
    }, [drag]);

    var play = function play() {
        setActive(true);
        audio.play();
    };

    var pause = function pause() {
        setActive(false);
        audio.pause();
    };

    var loop = function loop() {
        setLooped(!looped);
    };

    React.useEffect(function () {
        if (audio != null) {
            audio.src = trackList[curTrack].url;
            setTitle(trackList[curTrack].title);
            play();
        }
    }, [curTrack]);

    var previous = function previous() {
        var index = playlist.indexOf(curTrack);
        index !== 0 ? setCurTrack(curTrack = playlist[index - 1]) : setCurTrack(curTrack = playlist[playlist.length - 1]);
    };

    var next = function next() {
        var index = playlist.indexOf(curTrack);
        index !== playlist.length - 1 ? setCurTrack(curTrack = playlist[index + 1]) : setCurTrack(curTrack = playlist[0]);
    };

    var shuffle = function shuffle() {
        setShuffled(!shuffled);
    };

    var playlistItemClickHandler = function playlistItemClickHandler(e) {
        var num = Number(e.currentTarget.getAttribute("data-key"));
        var index = playlist.indexOf(num);
        setCurTrack(curTrack = playlist[index]);
        play();
    };

    var isInitialFilter = React.useRef(true);
    React.useEffect(function () {
        if (isInitialFilter.current) {
            isInitialFilter.current = false;
        } else {
            if (!playlist.includes(curTrack)) {
                setCurTrack(curTrack = playlist[0]);
            }
        }
    }, [filter]);

    var tagClickHandler = function tagClickHandler(e) {
        var tag = e.currentTarget.innerHTML;

        if (!filter.includes(tag)) {
            setFilter([].concat(filter, [tag]));
        } else {
            var filteredArray = filter.filter(function (item) {
                return item !== tag;
            });
            setFilter([].concat(filteredArray));
        }
    };

    return /*#__PURE__*/React__default.createElement(PageTemplate, null, /*#__PURE__*/React__default.createElement(GlobalStyles, null), includeTags && /*#__PURE__*/React__default.createElement(TagsTemplate, null, tags.map(function (tag, index) {
        return /*#__PURE__*/React__default.createElement(TagItem, {
            key: index,
            className: filter.length !== 0 && filter.includes(tag) ? "active" : "",
            tag: tag,
            onClick: tagClickHandler
        });
    })), includeSearch && /*#__PURE__*/React__default.createElement(Search, {
        value: query,
        onChange: function onChange(e) {
            return updateQuery(e.target.value.toLowerCase());
        },
        placeholder: "Search " + trackList.length + " tracks..."
    }), /*#__PURE__*/React__default.createElement(PlayerTemplate, null, /*#__PURE__*/React__default.createElement("div", {
        className: style.titles
    }, /*#__PURE__*/React__default.createElement(Title, {
        title: title
    }), /*#__PURE__*/React__default.createElement(Time, {
        time: (!time ? "0:00" : fmtMSS(time)) + "/" + (!length ? "0:00" : fmtMSS(length))
    })), /*#__PURE__*/React__default.createElement(Progress, {
        value: slider,
        onChange: function onChange(e) {
            setSlider(e.target.value);
            setDrag(e.target.value);
        },
        onMouseUp: play,
        onTouchEnd: play
    }), /*#__PURE__*/React__default.createElement("div", {
        className: styles.buttons_volume_wrapper
    }, /*#__PURE__*/React__default.createElement(ButtonsBox, null, /*#__PURE__*/React__default.createElement(LoopCurrent, {
        src: looped ? loopCurrentBtn : loopNoneBtn,
        onClick: loop
    }), /*#__PURE__*/React__default.createElement(Previous, {
        src: previousBtn,
        onClick: previous
    }), active ? /*#__PURE__*/React__default.createElement(Pause, {
        src: pauseBtn,
        onClick: pause
    }) : /*#__PURE__*/React__default.createElement(Play, {
        src: playBtn,
        onClick: play
    }), /*#__PURE__*/React__default.createElement(Next, {
        src: nextBtn,
        onClick: next
    }), /*#__PURE__*/React__default.createElement(Shuffle, {
        src: shuffled ? shuffleAllBtn : shuffleNoneBtn,
        onClick: shuffle
    })), /*#__PURE__*/React__default.createElement(Volume, {
        value: volume,
        onChange: function onChange(e) {
            setVolume(e.target.value / 100);
        }
    }))), showPlaylist && /*#__PURE__*/React__default.createElement(PlaylistTemplate, null, trackList.sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
    }).map(function (el, index) {
        if (filter.length === 0 || filter.some(function (filter) {
            return el.tags.includes(filter);
        })) {
            if (el.title.toLowerCase().includes(query.toLowerCase())) {
                playlist.push(index);
                return /*#__PURE__*/React__default.createElement(PlaylistItem, {
                    className: curTrack === index ? "active" : "",
                    key: index,
                    data_key: index,
                    title: el.title,
                    src: el.url,
                    onClick: playlistItemClickHandler
                });
            }
        }
    })));
};

module.exports = Player;
//# sourceMappingURL=index.js.map
