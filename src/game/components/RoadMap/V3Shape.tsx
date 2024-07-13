// import { joinClassList } from './BaccaratRoadmaps';

// export function beadRoadSvg({
//     baseClassList,
//     bankerPair,
//     playerPair,
//     value,
// }: {
//     baseClassList: string;
//     bankerPair?: boolean;
//     playerPair?: boolean;
//     value: number;
// }) {
//     return (
//         <svg
//             xmlns='http://www.w3.org/2000/svg'
//             width='50'
//             height='50'
//             viewBox='0 0 50 50'
//         >
//             <title>Artboard 2</title>

//             <circle
//                 id='Base'
//                 className={'bead-road-cls-1 ' + baseClassList}
//                 cx='25'
//                 cy='25'
//                 r='24'
//             />

//             <text
//                 id='Number'
//                 className='bead-road-cls-2'
//                 transform='translate(16.1 37)'
//             >
//                 {value}
//             </text>

//             {bankerPair ? (
//                 <circle
//                     id='BankerPair'
//                     className={'bead-road-cls-3 sl-roadmap-red'}
//                     cx='10'
//                     cy='10'
//                     r='6'
//                 />
//             ) : null}

//             {playerPair ? (
//                 <circle
//                     id='PlayerPair'
//                     className={'bead-road-cls-4 sl-roadmap-blue'}
//                     cx='41'
//                     cy='40'
//                     r='6'
//                 />
//             ) : null}
//         </svg>
//     );
// }

// export function tieLineSvg({ tieValue }: { tieValue?: number }) {
//     if (!tieValue) return null;

//     return (
//         <>
//             <line
//                 id='TieLine'
//                 className='sl-roadmap-green'
//                 x1='46'
//                 y1='4'
//                 x2='4'
//                 y2='46'
//             />
//             <text id='Number' transform='translate(18.55 26.34) rotate(-45)'>
//                 9
//             </text>
//         </>
//     );
// }

// export function bigRoadCircleSvg({
//     baseClass,
//     bankerPair,
//     playerPair,
//     tieLine,
//     tieValue,

//     blinking,
//     filled,
//     noOutline,
//     tieLineFilled,
// }: {
//     baseClass: string;

//     bankerPair?: boolean;
//     playerPair?: boolean;
//     tieLine?: boolean;
//     tieValue?: number;

//     blinking?: boolean;
//     filled?: boolean;
//     /** adds "hidden-outline" class */
//     noOutline?: boolean;
//     tieLineFilled?: boolean;
// }) {
//     return (
//         <svg
//             data-name='Layer 1'
//             className={joinClassList(
//                 baseClass,
//                 blinking ? 'sl-roadmap-alternating' : '',
//                 tieLineFilled ? 'tie-line-filled' : '',
//             )}
//             xmlns='http://www.w3.org/2000/svg'
//             width='50'
//             height='50'
//             viewBox='0 0 50 50'
//         >
//             <title>Big Road</title>

//             {!noOutline ? (
//                 <circle
//                     id='Circle'
//                     className={joinClassList(
//                         'big-road-cls-1',
//                         filled ? 'filled' : '',
//                     )}
//                     cx='25'
//                     cy='25'
//                     r='21'
//                 />
//             ) : null}

//             {bankerPair ? (
//                 <circle
//                     id='BankerPair'
//                     className='big-road-cls-2'
//                     cx='10'
//                     cy='10'
//                     r='6'
//                 />
//             ) : null}

//             {playerPair ? (
//                 <circle
//                     id='PlayerPair'
//                     className='big-road-cls-3'
//                     cx='40'
//                     cy='40'
//                     r='6'
//                 />
//             ) : null}

//             {tieLine ? (
//                 <line
//                     id='TieLine'
//                     className='big-road-cls-4'
//                     x1='46'
//                     y1='4'
//                     x2='4'
//                     y2='46'
//                 />
//             ) : null}

//             {tieValue ? (
//                 <text
//                     className='big-road-cls-5'
//                     transform='translate(18.6 26.34) rotate(-45)'
//                 >
//                     {tieValue}
//                 </text>
//             ) : null}
//         </svg>
//     );
// }
