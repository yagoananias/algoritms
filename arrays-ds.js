const string = [ 'a', 'b', 'c', 'd' ];
//4*4 = 16 bytes of storage

strings[2]

//push adds an item at the end of an array (it is a O(1) operation)
strings.push('e');
             
//pop is the oposite of push, in fact pop delete the last item in a array. It is a O(1) operation too.
strings.pop()

//unshift adds an item at the BEGINNING of an array. The operation is O(n) because it needs to manipulate every item in an array
strings.unshift('x')

//splice first you need to tell the starting point, then the kind of operation (delete, add, etc) and finally the item to be added. Operation O(n) (the worst case in fact)
strings.splice(2, 0, 'alien');

console.log(strings);
