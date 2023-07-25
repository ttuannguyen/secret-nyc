class SecretSpotsController < ApplicationController
    def index
        render json: SecretSpot.all
    end
end
