import Image from 'next/image'
import styles from './page.module.css'
import Archer from './components/Archer/Archer'
import Navi from './components/Navi/Navi'
import Landing from './components/Landing/Landing'
import ProjectSelector from './components/ProjectSelector/ProjectSelector'
import Credits from './components/Credits/Credits'


export default function Home() {
  return (
    <main>
      <h1>Hello there</h1>
      
      <Landing/>
      <Navi/>
      <ProjectSelector/>
      <Credits/>
      <Archer/>
    </main>
  )
}
