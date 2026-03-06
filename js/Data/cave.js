var x=false;
var caveData ={
	info:{
		layout:[
			[3,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,1],
			[4,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,1],
			[4,x,x,5,x,x,5,x,x,x,x,x,x,5,5,x,5,5,x,x,x,5,x,x,5,5,x,x,x,x,x,5,x,x,1],
			[4,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,1,2,x,x,x,x,x,x,0,x,x,x,x,2,0,1,2,0,x,x,x,x,x,x,x,x,x],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,x,x,x,x,2,0,1,2,0,x,x,x,x,x,x,x,x,x],
			[x,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,8,8,8,8,2,0,1,2,0,1,2,0,1,2,0,1,2,3]
			
			
		],
		src:`images/Tile_Set_Final(3).png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,x,7,7,7,7,7,7,7,7,7,7,7],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[x,7,7,7,7,7,x,x,x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,x,x,7,7,7,7,7],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[x,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			],
			src:`images/Tile_Set_Final(3).png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[6,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3],
					[7,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3],
					[7,x,x,8,x,x,8,x,x,x,x,x,x,8,8,x,8,8,x,x,x,8,x,x,8,8,x,x,x,x,x,8,x,x,3],
					[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,4,5,x,x,x,x,x,x,3,x,x,x,x,5,3,4,5,3,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,3,x,x,x,x,5,3,4,5,3,x,x,x,x,x,x,x,x,x],
					[x,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3]
					
					
				],
				src:`images/Tile_Set_Final(1).png`,
			},
			states:caveData.states
			

			}













