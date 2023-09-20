import LandingPage from '../../pages/LandingPage'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <LandingPage />
      <Roadmap />
    </main>
  )
}
