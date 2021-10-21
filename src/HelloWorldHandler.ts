import { HttpRequest, HttpResponse, BaseHttpHandler } from "./BaseHttpHandler";

interface Input { }

interface Output { message: string }

class HelloWorldHandler extends BaseHttpHandler<Input, Output> {
  protected async process(input: Input): Promise<Output> {
    return {
      message: "Hello World!"
    }
  }
}

export default function handler(request: HttpRequest): Promise<HttpResponse> {
  return new HelloWorldHandler().execute(request);
} 