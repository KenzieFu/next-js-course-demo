// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import{ useRouter } from "next/router";
import Head from 'next/dist/next-server/lib/head';

function NewMeetupPage() {
  const route=useRouter();
  
  async function addMeetupHandler(enteredMeetupData) {
    
    const response=await fetch("/api/new-meetup",{
      method:"POST",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(enteredMeetupData)
    });

    const data = await response.json();
    console.log(data);

    route.push("/");
  }

 

  return (<>
  <Head>
    <title>Add a New Meetup</title>
    <meta name='description' content='Add your own meetups and create amazing networking oppurtunities' />
  </Head>
  
  <NewMeetupForm onAddMeetup={addMeetupHandler} /></>)
}

export default NewMeetupPage;