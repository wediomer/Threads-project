
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";
import { fetchUserPosts } from "@/lib/actions/user.actions";

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

const ThreadsTab = async ({currentUserId, accountId, accountType}: 
    Props) => {
       let result = await fetchUserPosts(accountId);

       if(!result) redirect("/")
    return (
        <section className="mt-9 flex flex-col gap-10">
            {result.threads.map((thread: any)=>(
            <ThreadCard
            key={thread._id}
            id={thread._id}
            currentUserId={currentUserId}
            parentId={thread.parentId}
            content={thread.text}
            author={thread.author} // tod0
            community={thread.community} // todo
            createdAt={thread.createdAt}
            comments={thread.children}
            />
            ))}
            ThreadsTab
        </section>
    )
}

export default ThreadsTab;