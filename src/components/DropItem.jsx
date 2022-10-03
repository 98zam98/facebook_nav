
const DropItem = (x) => {
  return (
    <div>
        <a href='#' className='DropItem'  >
            <span className='DropItem_left' >{x.left}</span>
            {x.children}
            <span className='DropItem_right' >{x.right}</span>
            
        </a>
    </div>
  )
}

export default DropItem