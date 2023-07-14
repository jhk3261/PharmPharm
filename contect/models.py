from django.db import models
from social.models import HumanInformation, HumanPharmacy,HumanDrugInformation, Pharmacist
 
class HumanInformation(models.Model):
    # Fields
    related_human_information = models.ForeignKey('self', on_delete=models.CASCADE)

class HumanPharmacy(models.Model):
    human_pharmacy = models.ForeignKey(HumanDrugInformation, on_delete=models.CASCADE, related_name='human_pharmacies')

class HumanDrugInformation(models.Model):
    related_human_drug_information = models.ForeignKey('self', on_delete=models.CASCADE)

    
class Pharmacist(models.Model):
    # Fields
    related_pharmacist = models.ForeignKey('self', on_delete=models.CASCADE)


class Reservation(models.Model):
    # Fields
    date = models.DateField()
    patient_name = models.TextField()
    phone_number = models.IntegerField()
    note = models.TextField()