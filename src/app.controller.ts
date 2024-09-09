import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { version, tables, sql } from "@el3um4s/mdbtools";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    const windowsPath = ".\\mdbtools-win";
    const database = "Z:\\Qrt\\QResult.mdb";
    const sList = "SELECT * FROM QRList"
    const sListData = "SELECT * FROM QRData "
    const v = await version({ database, windowsPath });
    const x = await tables({ database, windowsPath });
    // console.log(v, x);
    
    
    const result = await sql({ database, windowsPath, sql: sListData });
    const sortDataLast = result.splice(0, 10)

    console.log(sortDataLast);
    // console.log(result);
    return this.appService.getHello();
  }
}
