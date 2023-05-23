import supabase from "@/utils/supabase"


export async function signInEmailAndPassword(email:string, password:string, setDone:any, setError: any) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        console.log("error while signing in")
        setError(error?.message)
    }

    else {
        console.log("Success")
        setDone("Success")
        
    }
}

export async function signUp(email:string, password:string, setDone:any, setError: any) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        console.log("error while signing in")
        setError(error?.message)
    }

    else {
        console.log("Success")
        setDone("Success")
    }

}