import React from 'react'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import ProgressReport from './ProgressReport'
import CommunittyProgress from './CommunittyProgress'
import CommunityCenter from './CommunityCenter'

export default function Home() {
  return (
    <>
    <Hero/>
    <Mission/>
    <ProgressReport/>
    <CommunittyProgress/>
    <CommunityCenter/>
    </>
  )
}
