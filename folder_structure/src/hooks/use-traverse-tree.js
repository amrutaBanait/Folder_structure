const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if ( tree.id === folderId && isFolder ) {
      tree.item.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
    }
    return tree;
  }
  return insertNode;
};

export default useTraverseTree;
