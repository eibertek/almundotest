
export declare type ActionCreator = {    
    REQUESTED: string,
    COMPLETED: string,
    FAILED: string,
}

export const actionCreator = (className:string, action:string): ActionCreator => 
   {
        return {
            REQUESTED: `${className}->${action}::Requested`,
            COMPLETED: `${className}->${action}::Completed`,
            FAILED: `${className}->${action}::Failed`,
       };
   };

export const GOOGLE = 'GOOGLE';
export const FACEBOOK = 'FACEBOOK';
export const TWITTER = 'TWITTER';
   
export declare type CredType = typeof GOOGLE | typeof FACEBOOK | typeof TWITTER;


export const NavigatorInstance = {
    dispatch:(action: any)=>{},
  };
