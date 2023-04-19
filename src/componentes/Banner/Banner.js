import { memo } from 'react'
import './Banner.css'

function Banner() {
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página do Orgando"/>
        </header>
    )
}
export default memo(Banner);