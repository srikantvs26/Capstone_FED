import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { NewUser } from './NewUser';

import { ApprovalReq } from './ApprovalReq'; 
import { Msgs } from './Msgs';
import { Chats } from './Chats';
import { User } from './User';


@Injectable({
    providedIn : 'root'
})
export class Main {
    private baseUrl:string;
    CurrentTime:string;
    
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    httpOptionString = {
        headers : new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
    };


    constructor(private http:HttpClient){
        this.baseUrl='https://capstone-bed.herokuapp.com';
    }
    newUser(nU:NewUser):Observable<boolean>{
        const newurl=`${this.baseUrl}/signup`;
        return this.http.post<boolean>(newurl,nU,this.httpOptions);
    }
    login(email,pwd):Observable<number>{
        const loginUrl =`${this.baseUrl}/login/${email}/${pwd}`;   
        return this.http.get<number>(loginUrl);
    }
    getRequests():Observable<ApprovalReq[]>{
        const newurl=`${this.baseUrl}/requests`;
        return this.http.get<ApprovalReq[]>(newurl);
    }
    approved(approve:ApprovalReq):Observable<boolean>{
        const newurl=`${this.baseUrl}/approved`;
        return this.http.post<boolean>(newurl,approve,this.httpOptions);
    }
    rejected(reject:ApprovalReq):Observable<boolean>{
        const newurl=`${this.baseUrl}/rejected`;
        return this.http.post<boolean>(newurl,reject,this.httpOptions);
    }
    details(email:string):Observable<NewUser>{
        const newurl=`${this.baseUrl}/details/${email}`;
        return this.http.get<NewUser>(newurl);
    }


    getAboveMsgs():Observable<Msgs[]>{
        const newurl=`${this.baseUrl}/abovemsgs`;
        return this.http.get<Msgs[]>(newurl);
    }
    savemsg(msg:Msgs):Observable<boolean>{
    
        const newurl=`${this.baseUrl}/savingmsg`;
        return this.http.post<boolean>(newurl,msg,this.httpOptions);
    }
    deleteAboveMsg(msg:Msgs):Observable<boolean>{
        const newurl=`${this.baseUrl}/deletingabovemsg`;
        return this.http.post<boolean>(newurl,msg,this.httpOptions);
    }
    getBelowMsgs():Observable<Msgs[]>{
        const newurl=`${this.baseUrl}/belowmsgs`;
        return this.http.get<Msgs[]>(newurl);
    }
    savebelowmsg(msg:Msgs):Observable<boolean>{
    
        const newurl=`${this.baseUrl}/savinbelowgmsg`;
        return this.http.post<boolean>(newurl,msg,this.httpOptions);
    }
    deleteBelowMsg(msg:Msgs):Observable<boolean>{
        const newurl=`${this.baseUrl}/deletingbelowmsg`;
        return this.http.post<boolean>(newurl,msg,this.httpOptions);
    }
    getAccess():Observable<boolean>{
        const newurl=`${this.baseUrl}/getaccess`;
        return this.http.get<boolean>(newurl);
    }
    getDiv():Observable<number>{
        const newurl=`${this.baseUrl}/getdiv`;
        return this.http.get<number>(newurl);
    }
    getUsers():Observable<User[]>{
        const newurl=`${this.baseUrl}/getusers`;
        return this.http.get<User[]>(newurl);
    }
    setType(email:string,type:string):Observable<boolean>{
        const newurl=`${this.baseUrl}/settype/${email}/${type}`;
        return this.http.get<boolean>(newurl);
    }
    deleteUser(email:string):Observable<boolean>{
        const newurl=`${this.baseUrl}/deleteuser/${email}`;
        return this.http.get<boolean>(newurl);
    }
    getIndividualMsgs():Observable<Chats[]>{
        const newurl=`${this.baseUrl}/getindividualmsgs`;
        return this.http.get<Chats[]>(newurl);
    }


    getEmailId():Observable<User>{
        const newurl=`${this.baseUrl}/getemailid`;
        return this.http.get<User>(newurl);
    }
    getUsersByDiv(div:number):Observable<User[]>{
        const newurl=`${this.baseUrl}/getusersbyid/${div}`;
        return this.http.get<User[]>(newurl);
    }
    getAllUsers():Observable<User[]>{
        const newurl=`${this.baseUrl}/getallusers`;
        return this.http.get<User[]>(newurl);
    }


    
    chatTimeline(from:string,to:string):Observable<Chats[]>{
        const newurl=`${this.baseUrl}/chattimeline/${from}/${to}`;
        return this.http.get<Chats[]>(newurl);
    }
    savechat(chat:Chats):Observable<boolean>{
        const newurl=`${this.baseUrl}/savingchat`;
        return this.http.post<boolean>(newurl,chat,this.httpOptions);
    }

    newChat(email:string,msg:string):Observable<boolean>{
        const newurl=`${this.baseUrl}/newchat/${email}/${msg}`;
        return this.http.get<boolean>(newurl);

    }
    //Filess
    getAboveFiles(): Observable<any> {
        const newurl = `${this.baseUrl}/allabovefiles`;
        return this.http.get(newurl);
       }
    getBelowFiles(): Observable<any> {
        const newurl = `${this.baseUrl}/allbelowfiles`;
        return this.http.get(newurl);
    }
    uploadFile(file: File): Observable<HttpEvent<{}>> {
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', `${this.baseUrl}/uploadfile`, formdata, {
        reportProgress: true,
        responseType: 'text'
        });
        return this.http.request(req);
    }
    deleteFile(id:number):Observable<any>{
        const newurl = `${this.baseUrl}/deletefile/${id}`;
        return this.http.get(newurl);
    }
    uploadDailyFile(file:File):Observable<HttpEvent<{}>>{
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', `${this.baseUrl}/uploadDailyfile`, formdata, {
        reportProgress: true,
        responseType: 'text'
        });
        return this.http.request(req);
    }
    getUploadPermission():Observable<boolean>{
        const newurl = `${this.baseUrl}/getuploadpermission`;
        return this.http.get<boolean>(newurl);
    }
    getAboveDailyFiles(): Observable<any> {
        const newurl = `${this.baseUrl}/abovedailyfiles`;
        return this.http.get(newurl);
       }
    getBelowDailyFiles(): Observable<any> {
        const newurl = `${this.baseUrl}/belowdailyfiles`;
        return this.http.get(newurl);
    }
    getMonthlyStatus():Observable<number[]>{
        const newurl = `${this.baseUrl}/getmonthlystatus`;
        return this.http.get<number[]>(newurl);
    }
    enrollEligibility(m:number):Observable<boolean>{
        const newurl = `${this.baseUrl}/enrolleligibility/${m}`;
        return this.http.get<boolean>(newurl);

    }
    uploadMonthlyFile(file:File,month:number):Observable<HttpEvent<{}>>{
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', `${this.baseUrl}/uploadmonthlyfile/${month}`, formdata, {
        reportProgress: true,
        responseType: 'text'
        });
        return this.http.request(req);
    }
    getAboveMonthlyFiles(): Observable<any> {
        const newurl = `${this.baseUrl}/abovemonthlyfiles`;
        return this.http.get(newurl);
    }
    getBelowMonthlyFiles(): Observable<any> {
        const newurl = `${this.baseUrl}/belowmonthlyfiles`;
        return this.http.get(newurl);
       }
    uploadHistory(email:string): Observable<any> {
        const newurl=`${this.baseUrl}/uploadhistory/${email}`;
        return this.http.get(newurl);
    }

}