const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1280;
canvas.height = 800;

const player = new Player()

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw()
    player.update()
}
animate()

window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'Enter':
           if (player.velocity.y === 0) 
           player.velocity.y = -10
            break
        case 'ArrowLeft':
            player.velocity.x = -4
            break
        case 'ArrowRight':
            player.velocity.x = 4
            break
    }
})