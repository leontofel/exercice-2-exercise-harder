import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { CreateUsecase } from './create.usecase';
import { FindAllUsecase } from './find-all.usecase';
import { FindByIdUsecase } from './find-by-id.usecase';

type AvailableUseCases = CreateUsecase | FindAllUsecase | FindByIdUsecase;

@Injectable()
export class DonationServiceFactory extends ServiceFactory<AvailableUseCases> {}
