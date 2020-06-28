
export class LinkNode<T> {

	constructor( public value: T ){}
  
	next: LinkNode<T>| null = null

	pre: LinkNode<T> | null = null
 
}


export class Link<T> {

	//   protected map = new Map<Symbol, LinkNode<T>>()

  protected start: LinkNode<T>| null = null

  

  insertAfter(val: T,next?: Symbol): void{
  	// const newNode = new LinkNode(val)
  	// let nextNode: LinkNode<T> | null
  	// if(!next){
  	// 	if(!this.start){
  	// 		this.start = newNode
  	// 	}
  	// 	return
  	// }
  	// //   nextNode = this.map.get(next)
	  
  	// // if(!nextNode){
  	// // 	throw 'error'
  	// // }
  	
  	// newNode.pre = nextNode
  	// newNode.next = nextNode.next
  	// nextNode.next = newNode
  	// if(nextNode.next){
  	// 	nextNode.next.pre = newNode
  	// }
  	// this.map.set(newNode.key, newNode)
  }

  remove(){
  	// const node = this.map.get(key)
  	// if(node){
  	// 	if(node.pre){
  	// 		node.pre.next = node.next
  	// 		this.map.delete(key)
  	// 	}else{
  	// 		throw 'no pre'
  	// 	}
  	// }
  }
  
  forEach(fun: (val:T, key: Symbol) => void){
  	// let curN: LinkNode<T> | null = this.start
  	// while(curN){
  	// 	fun(curN.value, curN.key)
  	// 	curN = curN.next
  	// }
  }

  toArray(){
	  const arr:T[] = []
	  this.forEach( val => arr.push(val) )
	  return arr
  }

}