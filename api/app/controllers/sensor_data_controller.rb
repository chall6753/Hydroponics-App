class SensorDataController < ApplicationController
    def index
        data = SensorDatum.last(10)
        render json: data
    end
end
