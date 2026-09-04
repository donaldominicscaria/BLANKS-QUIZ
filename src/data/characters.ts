export interface Character { id: string; name: string; image?: string; tone: string }
// Add the official artwork at public/characters/<id>.png. The UI detects and displays it automatically.
export const characters: Character[] = [
 {id:'nova',name:'Nova',image:'/characters/nova.jpg',tone:'#9b6bff'}, {id:'orbit',name:'Orbit',image:'/characters/orbit.jpg',tone:'#c896ff'}, {id:'echo',name:'Echo',image:'/characters/echo.jpg',tone:'#6e68ed'},
 {id:'vex',name:'Vex',image:'/characters/vex.jpg',tone:'#a557dc'}, {id:'pixel',name:'Pixel',image:'/characters/pixel.jpg',tone:'#a28cff'}, {id:'bolt',name:'Bolt',image:'/characters/bolt.jpg',tone:'#7c3aed'}, {id:'luna',name:'Luna',image:'/characters/luna.jpg',tone:'#d4b6ff'},
];
