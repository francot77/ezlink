'use client'
import Card from "@/components/Card";
import Image from "next/image";
import FastIcon from "@/icons/Fast";
import Computer from "@/icons/Computer";
import Analitics from "@/icons/Analitics"


export default function Home() {

  const icons = {
    fast: <FastIcon />,
    computer: <Computer />,
    analitics: <Analitics />
  }


  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("Hola")
  }
  return (
    <main className="flex h-full bg-custom-background flex-col items-center">
      <section className="bg-transparent flex w-screen h-sceen pt-10 items-center flex-col bg-custom-background">
        <Image src={'/images/homeimg.webp'} width={550} height={300} className='drop-shadow-md aspect-square relative z-0 top-1/4 sm:rounded-lg' alt="home image of chains" />
        <div className="absolute z-20 sm:top-2/4 top-1/4 ">
          <h1 className="font-bold text-2xl lg:text-4xl text-center text-white">Short, share and track</h1>
          <h1 className="font-semibold text-xl text-center mb-7 text-white">Easiest with EzLink</h1>
          <form onSubmit={handleSubmit}>
            <div className="rounded-lg p-2 m-2 bg-custom-background">
              <input placeholder="Type your URL here!" className="mx-4 my-2 text-white bg-custom-background"></input>
              <input type="submit" value={"Short!"} className="bg-custom-green text-black font-bold p-2 rounded-lg"></input>
            </div>
          </form>
        </div>
      </section>
      <section className="w-full">
        <h1 className="mt-20 sm:ml-20 ml-5 sm:text-5xl text-2xl font-bold text-left text-white">Why EzLink?</h1>
        <h5 className="mt-5 p-2 sm:ml-20 ml-5 sm:text-xl sm:mb-10 text-sm font-bold text-left text-white">Ezlink is a simple way to manage and create your links for any url.</h5>

        <div className="flex sm:flex-row flex-col gap-10 justify-center items-center mx-4">
          <Card icon={icons.fast} text="Fast and Simple" description="Create your links faster and with one click" color="bg-custom-card" />
          <Card icon={icons.computer} text="Link Magnament" description="Customize your links, add tags, and view detailed analytics" color="bg-custom-card" />
          <Card icon={icons.analitics} text="Powerful Analytics" description="Track link clicks, geographic data, and more." color="bg-custom-card" />
        </div>
      </section>
    </main>
  )
}
