const useTraverseTree = () =>{
    function insertNode (tree, folderId, item, idFolder){
        if(tree.id === folderId && isFolder){
            tree.item.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items:[]
            })
        }
    }
    return (insertNode)
}

export default useTraverseTree;