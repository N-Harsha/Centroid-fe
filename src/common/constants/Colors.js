const COLORS = [
  "#5d8aa8",
  "#00308f",
  "#72a0c1",
  "#a32638",
  "#f0f8ff",
  "#e32636",
  "#c46210",
  "#efdecd",
  "#e52b50",
  "#ffbf00",
  "#ff7e00",
  "#ff033e",
  "#96c",
  "#a4c639",
  "#f2f3f4",
  "#cd9575",
  "#915c83",
  "#841b2d",
  "#faebd7",
  "#008000",
  "#8db600",
  "#fbceb1",
  "#0ff",
  "#7fffd4",
  "#4b5320",
  "#3b444b",
  "#e9d66b",
  "#b2beb5",
  "#87a96b",
  "#f96",
  "#a52a2a",
  "#fdee00",
  "#6e7f80",
  "#568203",
  "#007fff",
  "#f0ffff",
  "#89cff0",
  "#a1caf1",
  "#f4c2c2",
  "#21abcd",
  "#fae7b5",
  "#ffe135",
  "#7c0a02",
  "#848482",
  "#98777b",
  "#bcd4e6",
  "#9f8170",
  "#f5f5dc",
  "#9c2542",
  "#ffe4c4",
  "#3d2b1f",
  "#fe6f5e",
  "#bf4f51",
  "#3d0c02",
  "#253529",
  "#3b3c36",
  "#ffebcd",
  "#a57164",
  "#318ce7",
  "#ace5ee",
  "#faf0be",
  "#00f",
  "#a2a2d0",
  "#1f75fe",
  "#69c",
  "#0d98ba",
  "#0093af",
  "#0087bd",
  "#339",
  "#0247fe",
  "#126180",
  "#8a2be2",
  "#de5d83",
  "#79443b",
  "#0095b6",
  "#e3dac9",
  "#c00",
  "#006a4e",
  "#873260",
  "#0070ff",
  "#b5a642",
  "#cb4154",
  "#1dacd6",
  "#6f0",
  "#bf94e4",
  "#c32148",
  "#ff007f",
  "#08e8de",
  "#d19fe8",
  "#f4bbff",
  "#ff55a3",
  "#fb607f",
  "#004225",
  "#cd7f32",
  "#964b00",
  "#a52a2a",
  "#ffc1cc",
  "#e7feff",
  "#f0dc82",
  "#480607",
  "#800020",
  "#deb887",
  "#c50",
  "#e97451",
  "#8a3324",
  "#bd33a4",
  "#702963",
  "#536872",
  "#5f9ea0",
  "#91a3b0",
  "#006b3c",
  "#ed872d",
  "#e30022",
  "#fff600",
  "#a67b5b",
  "#4b3621",
  "#1e4d2b",
  "#a3c1ad",
  "#c19a6b",
  "#efbbcc",
  "#78866b",
  "#ffef00",
  "#ff0800",
  "#e4717a",
  "#00bfff",
  "#592720",
  "#c41e3a",
  "#0c9",
  "#960018",
  "#d70040",
  "#eb4c42",
  "#ff0038",
  "#ffa6c9",
  "#b31b1b",
  "#99badd",
  "#ed9121",
  "#062a78",
  "#92a1cf",
  "#ace1af",
  "#007ba7",
  "#2f847c",
  "#b2ffff",
  "#4997d0",
  "#de3163",
  "#ec3b83",
  "#007ba7",
  "#2a52be",
  "#6d9bc3",
  "#007aa5",
  "#e03c31",
  "#a0785a",
  "#fad6a5",
  "#36454f",
  "#e68fac",
  "#dfff00",
  "#7fff00",
  "#de3163",
  "#ffb7c5",
  "#cd5c5c",
  "#de6fa1",
  "#a8516e",
  "#aa381e",
  "#7b3f00",
  "#d2691e",
  "#ffa700",
  "#98817b",
  "#e34234",
  "#d2691e",
  "#e4d00a",
  "#fbcce7",
  "#0047ab",
  "#d2691e",
  "#6f4e37",
  "#9bddff",
  "#f88379",
  "#002e63",
  "#8c92ac",
  "#b87333",
  "#da8a67",
  "#ad6f69",
  "#cb6d51",
  "#966",
  "#ff3800",
  "#ff7f50",
  "#f88379",
  "#ff4040",
  "#893f45",
  "#fbec5d",
  "#b31b1b",
  "#6495ed",
  "#fff8dc",
  "#fff8e7",
  "#ffbcd9",
  "#fffdd0",
  "#dc143c",
  "#be0032",
  "#0ff",
  "#00b7eb",
  "#ffff31",
  "#f0e130",
  "#00008b",
  "#654321",
  "#5d3954",
  "#a40000",
  "#08457e",
  "#986960",
  "#cd5b45",
  "#008b8b",
  "#536878",
  "#b8860b",
  "#a9a9a9",
  "#013220",
  "#00416a",
  "#1a2421",
  "#bdb76b",
  "#483c32",
  "#734f96",
  "#8b008b",
  "#036",
  "#556b2f",
  "#ff8c00",
  "#9932cc",
  "#779ecb",
  "#03c03c",
  "#966fd6",
  "#c23b22",
  "#e75480",
  "#039",
  "#872657",
  "#8b0000",
  "#e9967a",
  "#560319",
  "#8fbc8f",
  "#3c1414",
  "#483d8b",
  "#2f4f4f",
  "#177245",
  "#918151",
  "#ffa812",
  "#483c32",
  "#cc4e5c",
  "#00ced1",
  "#9400d3",
  "#9b870c",
  "#00703c",
  "#555",
  "#d70a53",
  "#a9203e",
  "#ef3038",
  "#e9692c",
  "#da3287",
  "#fad6a5",
  "#b94e48",
  "#704241",
  "#c154c1",
  "#004b49",
  "#95b",
  "#c0c",
  "#ffcba4",
  "#ff1493",
  "#843f5b",
  "#f93",
  "#00bfff",
  "#66424d",
  "#1560bd",
  "#c19a6b",
  "#edc9af",
  "#696969",
  "#1e90ff",
  "#d71868",
  "#85bb65",
  "#967117",
  "#00009c",
  "#e1a95f",
  "#555d50",
  "#c2b280",
  "#614051",
  "#f0ead6",
  "#1034a6",
  "#7df9ff",
  "#ff003f",
  "#0ff",
  "#0f0",
  "#6f00ff",
  "#f4bbff",
  "#cf0",
  "#bf00ff",
  "#3f00ff",
  "#8f00ff",
  "#ff0",
  "#50c878",
  "#b48395",
  "#96c8a2",
  "#c19a6b",
  "#801818",
  "#b53389",
  "#f400a1",
  "#e5aa70",
  "#4d5d53",
  "#4f7942",
  "#ff2800",
  "#6c541e",
  "#ce2029",
  "#b22222",
  "#e25822",
  "#fc8eac",
  "#f7e98e",
  "#eedc82",
  "#fffaf0",
  "#ffbf00",
  "#ff1493",
  "#cf0",
  "#ff004f",
  "#014421",
  "#228b22",
  "#a67b5b",
  "#0072bb",
  "#86608e",
  "#cf0",
  "#c72c48",
  "#f64a8a",
  "#f0f",
  "#c154c1",
  "#f7f",
  "#c74375",
  "#e48400",
  "#c66",
  "#dcdcdc",
  "#e49b0f",
  "#f8f8ff",
  "#b06500",
  "#6082b6",
  "#e6e8fa",
  "#d4af37",
  "#ffd700",
  "#996515",
  "#fcc200",
  "#ffdf00",
  "#daa520",
  "#a8e4a0",
  "#808080",
  "#465945",
  "#808080",
  "#bebebe",
  "#0f0",
  "#1cac78",
  "#008000",
  "#00a877",
  "#009f6b",
  "#00a550",
  "#66b032",
  "#adff2f",
  "#a99a86",
  "#00ff7f",
  "#663854",
  "#446ccf",
  "#5218fa",
  "#e9d66b",
  "#3fff00",
  "#c90016",
  "#da9100",
  "#808000",
  "#df73ff",
  "#f400a1",
  "#f0fff0",
  "#007fbf",
  "#49796b",
  "#ff1dce",
  "#ff69b4",
  "#355e3b",
  "#71a6d2",
  "#fcf75e",
  "#002395",
  "#b2ec5d",
  "#138808",
  "#cd5c5c",
  "#e3a857",
  "#6f00ff",
  "#00416a",
  "#4b0082",
  "#002fa7",
  "#ff4f00",
  "#ba160c",
  "#c0362c",
  "#5a4fcf",
  "#f4f0ec",
  "#009000",
  "#fffff0",
  "#00a86b",
  "#f8de7e",
  "#d73b3e",
  "#a50b5e",
  "#343434",
  "#fada5e",
  "#bdda57",
  "#29ab87",
  "#4cbb17",
  "#7c1c05",
  "#c3b091",
  "#f0e68c",
  "#e8000d",
  "#087830",
  "#d6cadd",
  "#26619c",
  "#fefe22",
  "#a9ba9d",
  "#cf1020",
  "#ccf",
  "#fff0f5",
  "#b57edc",
  "#c4c3d0",
  "#9457eb",
  "#ee82ee",
  "#e6e6fa",
  "#fbaed2",
  "#967bb6",
  "#fba0e3",
  "#e6e6fa",
  "#7cfc00",
  "#fff700",
  "#fffacd",
  "#e3ff00",
  "#1a1110",
  "#fdd5b1",
  "#add8e6",
  "#b5651d",
  "#e66771",
  "#f08080",
  "#93ccea",
  "#f56991",
  "#e0ffff",
  "#f984ef",
  "#fafad2",
  "#d3d3d3",
  "#90ee90",
  "#f0e68c",
  "#b19cd9",
  "#ffb6c1",
  "#e97451",
  "#ffa07a",
  "#f99",
  "#20b2aa",
  "#87cefa",
  "#789",
  "#b38b6d",
  "#e68fac",
  "#ffffe0",
  "#c8a2c8",
  "#bfff00",
  "#32cd32",
  "#0f0",
  "#9dc209",
  "#195905",
  "#faf0e6",
  "#c19a6b",
  "#6ca0dc",
  "#534b4f",
  "#e62020",
  "#f0f",
  "#ca1f7b",
  "#ff0090",
  "#aaf0d1",
  "#f8f4ff",
  "#c04000",
  "#fbec5d",
  "#6050dc",
  "#0bda51",
  "#979aaa",
  "#ff8243",
  "#74c365",
  "#880085",
  "#c32148",
  "#800000",
  "#b03060",
  "#e0b0ff",
  "#915f6d",
  "#ef98aa",
  "#73c2fb",
  "#e5b73b",
  "#6da",
  "#0000cd",
  "#e2062c",
  "#af4035",
  "#f3e5ab",
  "#035096",
  "#1c352d",
  "#dda0dd",
  "#ba55d3",
  "#0067a5",
  "#9370db",
  "#bb3385",
  "#aa4069",
  "#3cb371",
  "#7b68ee",
  "#c9dc87",
  "#00fa9a",
  "#674c47",
  "#48d1cc",
  "#79443b",
  "#d9603b",
  "#c71585",
  "#f8b878",
  "#f8de7e",
  "#fdbcb4",
  "#191970",
  "#004953",
  "#ffc40c",
  "#3eb489",
  "#f5fffa",
  "#98ff98",
  "#ffe4e1",
  "#faebd7",
  "#967117",
  "#73a9c2",
  "#ae0c00",
  "#addfad",
  "#30ba8f",
  "#997a8d",
  "#18453b",
  "#c54b8c",
  "#ffdb58",
  "#21421e",
  "#f6adc6",
  "#2a8000",
  "#fada5e",
  "#ffdead",
  "#000080",
  "#ffa343",
  "#fe4164",
  "#39ff14",
  "#d7837f",
  "#a4dded",
  "#059033",
  "#0077be",
  "#c72",
  "#008000",
  "#cfb53b",
  "#fdf5e6",
  "#796878",
  "#673147",
  "#c08081",
  "#808000",
  "#3c341f",
  "#6b8e23",
  "#9ab973",
  "#353839",
  "#b784a7",
  "#ff7f00",
  "#ff9f00",
  "#ff4500",
  "#fb9902",
  "#ffa500",
  "#da70d6",
  "#654321",
  "#900",
  "#414a4c",
  "#ff6e4a",
  "#002147",
  "#060",
  "#273be2",
  "#682860",
  "#bcd4e6",
  "#afeeee",
  "#987654",
  "#af4035",
  "#9bc4e2",
  "#ddadaf",
  "#da8a67",
  "#abcdef",
  "#e6be8a",
  "#eee8aa",
  "#98fb98",
  "#dcd0ff",
  "#f984e5",
  "#fadadd",
  "#dda0dd",
  "#db7093",
  "#96ded1",
  "#c9c0bb",
  "#ecebbd",
  "#bc987e",
  "#db7093",
  "#78184a",
  "#ffefd5",
  "#50c878",
  "#aec6cf",
  "#836953",
  "#cfcfc4",
  "#7d7",
  "#f49ac2",
  "#ffb347",
  "#dea5a4",
  "#b39eb5",
  "#ff6961",
  "#cb99c9",
  "#fdfd96",
  "#800080",
  "#536878",
  "#ffe5b4",
  "#ffcba4",
  "#fc9",
  "#ffdab9",
  "#fadfad",
  "#d1e231",
  "#eae0c8",
  "#88d8c0",
  "#b768a2",
  "#e6e200",
  "#ccf",
  "#1c39bb",
  "#00a693",
  "#32127a",
  "#d99058",
  "#f77fbe",
  "#701c1c",
  "#c33",
  "#fe28a2",
  "#ec5800",
  "#cd853f",
  "#df00ff",
  "#000f89",
  "#123524",
  "#fddde6",
  "#01796f",
  "#ffc0cb",
  "#ffddf4",
  "#f96",
  "#e7accf",
  "#f78fa7",
  "#93c572",
  "#e5e4e2",
  "#8e4585",
  "#dda0dd",
  "#ff5a36",
  "#b0e0e6",
  "#ff8f00",
  "#701c1c",
  "#003153",
  "#df00ff",
  "#c89",
  "#ff7518",
  "#69359c",
  "#800080",
  "#9678b6",
  "#9f00c5",
  "#fe4eda",
  "#50404d",
  "#a020f0",
  "#51484f",
  "#5d8aa8",
  "#ff355e",
  "#fbab60",
  "#e30b5d",
  "#915f6d",
  "#e25098",
  "#b3446c",
  "#826644",
  "#f3c",
  "#e3256b",
  "#f00",
  "#a52a2a",
  "#860111",
  "#f2003c",
  "#c40233",
  "#ff5349",
  "#ed1c24",
  "#fe2712",
  "#c71585",
  "#ab4e52",
  "#522d80",
  "#002387",
  "#004040",
  "#f1a7fe",
  "#d70040",
  "#0892d0",
  "#a76bcf",
  "#b666d2",
  "#b03060",
  "#414833",
  "#0cc",
  "#ff007f",
  "#f9429e",
  "#674846",
  "#b76e79",
  "#e32636",
  "#f6c",
  "#aa98a9",
  "#905d5d",
  "#ab4e52",
  "#65000b",
  "#d40000",
  "#bc8f8f",
  "#0038a8",
  "#002366",
  "#4169e1",
  "#ca2c92",
  "#7851a9",
  "#fada5e",
  "#d10056",
  "#e0115f",
  "#9b111e",
  "#ff0028",
  "#bb6528",
  "#e18e96",
  "#a81c07",
  "#80461b",
  "#b7410e",
  "#da2c43",
  "#00563f",
  "#8b4513",
  "#ff6700",
  "#f4c430",
  "#ff8c69",
  "#ff91a4",
  "#c2b280",
  "#967117",
  "#ecd540",
  "#f4a460",
  "#967117",
  "#92000a",
  "#507d2a",
  "#0f52ba",
  "#0067a5",
  "#cba135",
  "#ff2400",
  "#fd0e35",
  "#ffd800",
  "#76ff7a",
  "#006994",
  "#2e8b57",
  "#321414",
  "#fff5ee",
  "#ffba00",
  "#704214",
  "#8a795d",
  "#009e60",
  "#fc0fc0",
  "#ff6fff",
  "#882d17",
  "#c0c0c0",
  "#cb410b",
  "#007474",
  "#87ceeb",
  "#cf71af",
  "#6a5acd",
  "#708090",
  "#039",
  "#933d41",
  "#100c08",
  "#fffafa",
  "#0fc0fc",
  "#a7fc00",
  "#00ff7f",
  "#23297a",
  "#4682b4",
  "#fada5e",
  "#900",
  "#4f666a",
  "#e4d96f",
  "#fc3",
  "#fad6a5",
  "#d2b48c",
  "#f94d00",
  "#f28500",
  "#fc0",
  "#e4717a",
  "#483c32",
  "#8b8589",
  "#d0f0c0",
  "#f88379",
  "#f4c2c2",
  "#008080",
  "#367588",
  "#00827f",
  "#cf3476",
  "#cd5700",
  "#e2725b",
  "#d8bfd8",
  "#de6fa1",
  "#fc89ac",
  "#0abab5",
  "#e08d3c",
  "#dbd7d2",
  "#eee600",
  "#ff6347",
  "#746cc0",
  "#ffc87c",
  "#fd0e35",
  "#808080",
  "#00755e",
  "#0073cf",
  "#417dc1",
  "#deaa88",
  "#b57281",
  "#30d5c8",
  "#00ffef",
  "#a0d6b4",
  "#7c4848",
  "#8a496b",
  "#66023c",
  "#03a",
  "#d9004c",
  "#8878c3",
  "#536895",
  "#ffb300",
  "#3cd070",
  "#ff6fff",
  "#120a8f",
  "#4166f5",
  "#635147",
  "#ffddca",
  "#5b92e5",
  "#b78727",
  "#ff6",
  "#014421",
  "#7b1113",
  "#ae2029",
  "#e1ad21",
  "#004f98",
  "#900",
  "#fc0",
  "#d3003f",
  "#f3e5ab",
  "#c5b358",
  "#c80815",
  "#43b3ae",
  "#e34234",
  "#d9603b",
  "#a020f0",
  "#8f00ff",
  "#324ab2",
  "#7f00ff",
  "#8601af",
  "#ee82ee",
  "#40826d",
  "#922724",
  "#9f1d35",
  "#da1d81",
  "#ffa089",
  "#9f00ff",
  "#004242",
  "#a4f4f9",
  "#645452",
  "#f5deb3",
  "#fff",
  "#f5f5f5",
  "#a2add0",
  "#ff43a4",
  "#fc6c85",
  "#722f37",
  "#673147",
  "#c9a0dc",
  "#c19a6b",
  "#738678",
  "#0f4d92",
  "#ff0",
  "#9acd32",
  "#efcc00",
  "#ffd300",
  "#ffae42",
  "#ffef00",
  "#fefe33",
  "#0014a8",
  "#2c1608"
];

export default COLORS;