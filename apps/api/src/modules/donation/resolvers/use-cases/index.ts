import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { CreateUsecase } from './create.usecase';
import { FindAllUsecase } from './find-all.usecase';
import { FindByIdUsecase } from './find-by-id.usecase';
import { FindAllSortedUsecase } from './find-all-sorted.usecase';
import { FindTotalUsecase } from './find-total.usecase';

type AvailableUseCases =
  | CreateUsecase
  | FindAllUsecase
  | FindByIdUsecase
  | FindAllSortedUsecase
  | FindTotalUsecase;

@Injectable()
export class DonationServiceFactory extends ServiceFactory<AvailableUseCases> {}
