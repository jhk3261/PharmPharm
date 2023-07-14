from django.contrib import admin

# Register your models here.

from .models import HumanInformation, HumanPharmacy, HumanDrugInformation,AnimalPharmacy,AnimalDrugInformation

admin.site.register(HumanInformation)
admin.site.register(HumanPharmacy)
admin.site.register(HumanDrugInformation)
admin.site.register(AnimalPharmacy)
admin.site.register(AnimalDrugInformation)
