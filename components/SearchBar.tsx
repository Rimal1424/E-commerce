"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";



const SearchBar = () => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const  name = formData.get("inputname") as string;

  if(name){
    router.push(`/list?name=${name}`);
  }
};

  return (
    <form
      className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="search"
        className="flex-1 bg-transparent outline-none"
        name="inputname"
      />
      <button className="cursor-pointer">
        <Image src="icons/search.svg" alt="" height={22} width={22} />
      </button>
    </form>
  );
};

export default SearchBar;
