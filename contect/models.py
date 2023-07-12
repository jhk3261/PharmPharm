from django.db import models
from social.models import HumanInformation, HumanPharmacy,HumanDrugInformation, Pharmacist
 
class HumanInformation(models.Model):
    # Fields
    human_information = models.ForeignKey(HumanInformation, on_delete=models.CASCADE)

class HumanPharmacy(models.Model):
      human_pharmacy = models.ForeignKey(HumanDrugInformation, on_delete=models.CASCADE, related_name='human_pharmacies')
    
class HumanDrugInformation(models.Model):
     human_drug_information = models.ForeignKey(HumanDrugInformation, on_delete=models.CASCADE)
    # Fields
    

class Pharmacist(models.Model):
     pharmacist = models.ForeignKey(Pharmacist, on_delete=models.CASCADE)
   

class Reservation(models.Model):
    # Fields
    date = models.DateField()
    patient_name = models.TextField()
    phone_number = models.IntegerField()
    note = models.TextField()