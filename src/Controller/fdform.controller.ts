import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { fd_form_interface } from 'src/Interface/fd_form.interface';
import { fdformservice } from 'src/Provider/fdform.service';
import { userformInterface } from 'src/Interface/userform.interface';
import { fd_form_fill_data } from 'src/entity/fd_form_fill_data.entity';
import { fd_form_field } from 'src/entity/fd_form_field.entity';
import { fd_form_field_interface } from 'src/Interface/fd_form_field.interface';
import { fdformfieldservice } from 'src/Provider/fdformfield.service';
import { fd_form_fill_data_interface } from 'src/Interface/fd_form_fill_data.interface';
import { fdformsfilldataervice } from 'src/Provider/fdformfilldata.service';
import { find } from 'rxjs';


@Controller('fdform')
export class fdformController {
    constructor(private userformService: fdformservice,private fdfieldservice:fdformfieldservice,private fdformfillservice:fdformsfilldataervice) {}
    

    @Post()
  async create(@Body() body : fd_form_interface,@Req() ReqData) {
    var i=1;
   const userformInterface = JSON.parse(JSON.stringify(ReqData.body));
   
   const fdform = new fd_form_interface();
   const fdformfield= new fd_form_field_interface();
   const fdfielddata= new fd_form_fill_data_interface();
   fdform.id = userformInterface.id;
   fdform.title = userformInterface.title;
   


    const uform = await this.userformService.create(fdform);
    
    if(!uform) {
      return 'error in creating user form'
    }
    
    for(var attributename in userformInterface){
        console.log(attributename+": "+userformInterface[attributename]);
        if(attributename!="title"){
            fdformfield.formid=userformInterface.id;
            fdformfield.fieldname=attributename;
            fdformfield.fieldtype="string";
            const uformfield = await this.fdfieldservice.create(fdformfield);
            // const data =await this.fdfieldservice.findOneByformid(userformInterface.id);
            // if(uformfield) {
            //     fdfielddata.form_entry_id=i;
            //     fdfielddata.form_field_id=uformfield.id;
            //     fdfielddata.value=userformInterface[attributename];

            //     const uformfilldata = await this.fdformfillservice.create(fdfielddata);
            // }
        }
        i++;
    }
    return 'user form created successfully'
  }

  @Get()
  async findAll(@Req() request: Request) {
    const uformArray: Array<fd_form_interface> = await this.userformService.findAll()
    return uformArray
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const newform: any = await this.userformService.update(id, body)
    return "userform updated";
  }
@Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userformService.delete(id)
    return "user form deleted"
  }
}