import { Injectable } from "injection-js";

@Injectable()
export class SharedService {

    public TestMethod(): string {
        return 'This is a test method from shared service';
    }
}