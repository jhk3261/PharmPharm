from django.contrib import admin

# Register your models here.

from .models import HumanInformation, HumanPharmacy,Pharmacist, HumanDrugInformation,Reservation

admin.site.register(HumanInformation)
admin.site.register(HumanPharmacy)
admin.site.register(Pharmacist)
admin.site.register(HumanDrugInformation)
admin.site.register(Reservation)