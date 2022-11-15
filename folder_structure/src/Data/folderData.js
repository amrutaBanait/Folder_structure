const explorer = {
    name:"root",
    isFolder:true,
    items:[
        {
            name:"public",
            isFolder:true,
            items:[
                {
                    name:"index.html",
                    isFolder:false,
                    items:[]
                }
            ]
        },
        {
            name:"src",
            isFolder:true,
            items:[
                {
                    name:"Data",
                    isFolder:true,
                    items:[
                        {
                            name:"folderData.js",
                            isFolder:false,
                            items:[]
                        }
                    ]
                },
              {
                name:"components",
                isFolder:true,
                items:[
                    {
                        name:"folder.js",
                        isFolder:false,
                        items:[]
                    }
                ]
              },
              {
                name:"App.js",
                isFolder:false,
                items:[]
              },
              {
                name:"index.js",
                isFolder:false,
                items:[]
              },
              {
                name:"style.css",
                isFolder:false,
                items:[],
              }
            ]
        },
        {
            name:"package.json",
            isFolder:false,
            items:[]
        }
    ]
};

export default explorer;