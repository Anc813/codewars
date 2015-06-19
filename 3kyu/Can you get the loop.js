function loop_size(node){
  var nodes = [node];
  node = node.getNext();
  while(!~nodes.indexOf(node)) {
    nodes.push(node);
    node = node.getNext();
  }
  return nodes.length - nodes.indexOf(node);
}
