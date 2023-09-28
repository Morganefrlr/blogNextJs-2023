import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";



export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1
  return (
    <div className="">
      <Featured/>
      <CategoryList/>
      <div className="flex gap-12">
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  )
}
