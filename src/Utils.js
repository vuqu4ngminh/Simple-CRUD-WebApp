import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const checkValue = (name,age) => {
    if(name === ''){
        toast.error('Không được để trống tên')
        return false
    }
    if(age === ''){
        toast.error('Không được để trống tuổi')
        return false
    }
    if(!isNaN(age)){
        if(Number(age) >= 1){
            return true
        } else {
            toast.error('Tuổi phải lớn hơn 0')
            return false
        }
    } else {
        toast.error('Tuổi không đúng định dạng')
        return false
    }
}
