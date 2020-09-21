export class ContactForm {

    public firstName: string | undefined;
    public lastName: string | undefined;
    public email: string | undefined;
    public phone: string | undefined;
    public message: string | undefined;
}

export interface IContactFormRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export interface IContactFormResponse {
    test: string;
}

export class InquiryForm {

    public firstName: string | undefined;
    public lastName: string | undefined;
    public email: string | undefined;
    public phone: string | undefined;
    public message: string | undefined;
}
