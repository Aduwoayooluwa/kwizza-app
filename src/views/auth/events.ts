import { signUp, signInEmailAndPassword } from "./helper";

export const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>, setLoading: any, setSuccess:any, setError:any,  email: string, password:string) => {
    event.preventDefault();
    // Handle login logic here
    console.log(email, password)
    setLoading(true)
    try {
        
        signInEmailAndPassword(email, password, setSuccess, setError);
    }
    catch (error) {
        setLoading(false)
    }
    finally {
        setLoading(false)
    } 
}; 

export const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>, setLoading: any, signInEmailAndPassword:any, setSuccess:any, setError:any,  email: string, password:string, confirmedPassword:string, setErrorStatus: any) => {
    event.preventDefault();
    // Handle login logic here
    console.log(email, password)
    setLoading(true)
    try {
        if (password !== confirmedPassword) {
            return;
        }
        signUp(email, password, setSuccess, setError, setErrorStatus);
    }
    catch (error) {
        setLoading(false)
    }
    finally {
        setLoading(false)
    } 
}; 


